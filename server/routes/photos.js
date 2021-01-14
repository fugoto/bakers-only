const router = require('express').Router();
const { Photo } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    res.send(await Photo.findAll());
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const { userId, photoInfo } = req.body;
    photoInfo.userId = userId;
    const newPhoto = await Photo.create(photoInfo);
    res.send(newPhoto);
  } catch (err) { next(err); }
});

module.exports = router;
