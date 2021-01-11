const { db, Photo, User } = require('./index');

const totalPhotos = 5;
const totalUsers = 5;

const photos = [];
const users = [];

for (let i = 1; i <= totalPhotos; i++) {
  photos.push({
    imageUrl: './images/cat1.jpeg',
    title: 'My cookie',
  });
}
for (let i = 1; i <= totalUsers; i++) {
  users.push({ name: 'Fu' });
}

const seed = async () => {
  try {
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
