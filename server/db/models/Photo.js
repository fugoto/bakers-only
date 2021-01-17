const Sequelize = require('sequelize');

const db = require('../db');

const { STRING, ARRAY } = Sequelize;

const Photo = db.define('photo', {
  imageUrl: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  title: {
    type: STRING,
  },
  tags: {
    type: ARRAY(STRING),
  },
});

Photo.deletePhotos = async function (photoIds) {
  for (const photoId of photoIds) {
    const photo = await Photo.findByPk(photoId);
    photo.destroy();
  }
};

module.exports = Photo;
