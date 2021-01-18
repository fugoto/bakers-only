const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Session } = require('../db');
const { A_WEEK_IN_MILLISECONDS } = require('../../constants');
const { saltAndHash } = require('../../utils/hashPassword');

router.get('/', async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (err) { next(err); }
});

router.post('/login', async (req, res, next) => {
  try {
    const { userEmail, password } = req.body;
    let user = await User.unscoped().findOne({
      where: {
        userEmail,
      },
    });
    if (user) { // if userEmail has an account...
      // first check password match with hashed pwd stored in db
      const comparisonResult = await bcrypt.compare(password, user.hashedPassword);
      if (!comparisonResult) { // if password did not match
        throw new Error('Wrong password!');
      }
      let userSession = await user.getSession();
      if (!userSession) { // if user doesnt have a session, create new one
        userSession = await Session.create();
        await userSession.setUser(user);
        await userSession.save();
      }
      res.cookie('sid', userSession.sid, { // set/refresh the expiration date of cookie
        maxAge: A_WEEK_IN_MILLISECONDS,
        path: '/',
      });
      user = await User.findOne({
        where: {
          userEmail,
        },
        include: { all: true },
      });
      res.status(200).send(user);
    } else res.sendStatus(404); // if userEmail and password are not a match, send 404
  } catch (err) { next(err); }
});

router.post('/register', async (req, res, next) => {
  try {
    const { userEmail, password, username } = req.body;
    const hashedPassword = await saltAndHash(password);
    const newUser = await User.create({
      userEmail,
      hashedPassword,
      username,
    });
    const userSession = await Session.create();
    await userSession.setUser(newUser);
    await userSession.save();
    res.cookie('sid', userSession.sid, { // set/refresh the expiration date of cookie
      maxAge: A_WEEK_IN_MILLISECONDS,
      path: '/',
    });
    res.send(newUser);
  } catch (err) { next(err); }
});

router.delete('/logout/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userSession = await Session.findOne({
      where: {
        userId,
      },
    });
    await userSession.destroy();
    res.status(200).send({ message: 'You have been successfully logged out.' });
  } catch (err) { next(err); }
});

module.exports = router;
