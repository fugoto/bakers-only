import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { addPhoto } from '../../store/photos';
import SinglePhoto from './SinglePhoto';
import Tags from './Tags';
import { CLOUDNAME, UPLOAD_PRESET } from '../../../constants';
import { getUser } from '../../store/user';

const cloudName = CLOUDNAME;
const uploadPreset = UPLOAD_PRESET;

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

  async addPhoto() {
    const userId = this.props.user.id;
    await this.props.addPhoto(userId, this.state);
    await this.props.getUser();
    this.props.history.push({
        pathname: '/',
    });
  }

  render() {
    let { user } = this.props;
    if (!user.id) return (
      <Link to="/login">Please log in to add a photo</Link>
    );
    return (
      <div>
        <SinglePhoto type="add" getPhotoUrl={this.getPhotoUrl} addPhoto={this.addPhoto} getTitle={this.getTitle} photo={this.state} />
        <p>Select Tags:</p>
        <Tags getTag={this.getTag} />
        <Button onClick={this.addPhoto} variant="contained" color="secondary">Add My Creation!</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  addPhoto: (userId, photoInfo) => dispatch(addPhoto(userId, photoInfo)),
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
