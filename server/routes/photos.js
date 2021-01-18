const router = require('express').Router();
const { Photo, User } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    res.send(await Photo.findAll({ include: [User] }));
  } catch (err) { next(err); }
});

// router.get('/:userId', async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const userPhotos = await Photo.findAll({
//       where: {
//         userId,
//       },
//     });
//     res.send(userPhotos);
//   } catch (err) { next(err); }
// });

router.post('/', async (req, res, next) => {
  try {
    const { userId, photoInfo } = req.body;
    photoInfo.userId = userId;
    const newPhoto = await Photo.create(photoInfo);
    res.send(newPhoto);
  } catch (err) { next(err); }
});

router.delete('/', async (req, res, next) => {
  try {
    const { photoIds } = req.body;
    console.log('body', photoIds);
    Photo.deletePhotos(photoIds);
    res.sendStatus(200);
  } catch (err) { next(err); }
});

module.exports = router;
