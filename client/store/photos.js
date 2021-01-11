import axios from 'axios';

const GET_PHOTOS = 'GET_PHOTOS';

const _getPhotos = (photos) => ({
  type: GET_PHOTOS,
  photos,
});

const getPhotos = () => async (dispatch) => {
  try {
    console.log('before')
    const { data } = await axios.get('/api/photos');
    console.log('data',data)
    dispatch(_getPhotos(data));
  } catch (err) {
    console.error(err);
  }
};

export default function photosReducer(state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
}

export { getPhotos };
