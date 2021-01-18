const faker = require('faker');
const { db, Photo, User } = require('./index');
const { TAGS } = require('../../constants');
const { saltAndHash } = require('../../utils/hashPassword');

const totalPhotos = 5;
const totalUsers = 5;

const photos = [];
const users = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function populateData() {
  for (let i = 1; i <= totalPhotos; i++) {
    photos.push({
      imageUrl: './images/cake.jpeg',
      title: 'My cake',
      tags: [TAGS[getRandomInt(TAGS.length)], TAGS[getRandomInt(TAGS.length)]],
    });
  }
  for (let i = 1; i <= totalUsers; i++) {
    users.push({
      username: faker.internet.userName(),
      userEmail: faker.internet.email().toLowerCase(),
      hashedPassword: 'test',
    });
  }
  for (const user of users) {
    user.hashedPassword = await saltAndHash(user.hashedPassword);
  }
}

const seed = async () => {
  try {
    await populateData();
    await db.sync({ force: true });
    await Photo.bulkCreate(photos);
    await User.bulkCreate(users);

    const createdPhotos = await Photo.findAll();
    const createdUsers = await User.findAll();

    for (let i = 0; i < createdPhotos.length; i++) {
      await createdPhotos[i].setUser(createdUsers[i]);
    }
    for (let i = 0; i < createdUsers.length; i++) {
      await createdUsers[i].setPhotos(createdPhotos[i]);
    }
    await db.close();
  } catch (err) {
    console.error(err);
  }
};

seed();
