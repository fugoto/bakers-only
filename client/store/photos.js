/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const GET_PHOTOS = 'GET_PHOTOS';
const ADD_PHOTO = 'ADD_PHOTO';

const _getPhotos = (photos) => ({
  type: GET_PHOTOS,
  photos,
});

const getPhotos = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/photos');
    dispatch(_getPhotos(data));
  } catch (err) {
    console.error(err);
  }
};

const _addPhoto = (photo) => ({
  type: ADD_PHOTO,
  photo,
});

const addPhoto = (userId, photoInfo) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/photos', { userId, photoInfo });
    dispatch(_addPhoto(data));
  } catch (err) {
    console.error(err);
  }
};

export default function photosReducer(state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.photos;
    case ADD_PHOTO:
      return [...state, action.photo];
    default:
      return state;
  }
}

export { getPhotos, addPhoto };
