const router = require('express').Router();
const { Photo } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    res.send(await Photo.findAll());
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const { userId, imageUrl } = req.body;
    console.log(userId, imageUrl)
    const newPhoto = await Photo.create({
      imageUrl,
      userId,
    });
    res.send(newPhoto);
  } catch (err) { next(err); }
});

module.exports = router;
