import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPhoto } from '../store/photos';
import SinglePhoto from './SinglePhoto';

const cloudName = 'woofmates';
const uploadPreset = 'woofmates';

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      title: '',
    };
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.getTitle = this.getTitle.bind(this);
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

  getTitle(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  addPhoto() {
    const userId = this.props.user.id;
    const { imageUrl, title } = this.state;
    this.props.addPhoto(userId, imageUrl, title);
  }

  render() {
    return (
      <div>
        <SinglePhoto type="add" getPhotoUrl={this.getPhotoUrl} addPhoto={this.addPhoto} getTitle={this.getTitle} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  user: { id: 1 }, // MUST UPDATE
});

const mapDispatchToProps = (dispatch) => ({
  addPhoto: (userId, imageUrl, title) => dispatch(addPhoto(userId, imageUrl, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
