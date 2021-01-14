import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { addPhoto } from '../store/photos';
import SinglePhoto from './SinglePhoto';
import Tags from './Tags';

const cloudName = 'woofmates';
const uploadPreset = 'woofmates';

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      title: '',
      tags: [],
    };
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getTag = this.getTag.bind(this);
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

  getTag(e) {
    if (e.target.checked) this.setState({ tags: [...this.state.tags, e.target.name] });
    else this.setState({ tags: this.state.tags.filter(tag => tag !== e.target.name) });
  }

  addPhoto() {
    const userId = this.props.user.id;
    this.props.addPhoto(userId, this.state);
  }

  render() {
    return (
      <div>
        <SinglePhoto type="add" getPhotoUrl={this.getPhotoUrl} addPhoto={this.addPhoto} getTitle={this.getTitle} imageUrl={this.state.imageUrl}/>
        <Tags getTag={this.getTag} />
        <Button onClick={this.addPhoto} variant="contained" color="secondary">Add My Creation!</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  user: { id: 1 }, // MUST UPDATE
});

const mapDispatchToProps = (dispatch) => ({
  addPhoto: (userId, photoInfo) => dispatch(addPhoto(userId, photoInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
