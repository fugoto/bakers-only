import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPhoto } from '../store/photos';

const cloudName = 'woofmates';
const uploadPreset = 'woofmates';

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    };
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  getPhotoUrl() {
    cloudinary.openUploadWidget({ cloudName, uploadPreset, cropping: true },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const imageUrl = result.info.secure_url;
          this.setState({ imageUrl });
        }
      });
  }

  addPhoto() {
    const userId = this.props.user.id;
    const { imageUrl } = this.state
    console.log('userid', userId, imageUrl);
    this.props.addPhoto(userId, imageUrl);
  }

  render() {
    return (
      <div>
        <button id="upload_widget" onClick={this.getPhotoUrl}>Add Photo</button>
        <button onClick={this.addPhoto}>Add My Creation!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  user: { id: 1 },
});

const mapDispatchToProps = (dispatch) => ({
  addPhoto: (userId, imageUrl) => dispatch(addPhoto(userId, imageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
