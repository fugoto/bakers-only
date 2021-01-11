const router = require('express').Router();
const { Photo } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    res.send(await Photo.findAll());
  } catch (err) { next(err); }
});

module.exports = router;
