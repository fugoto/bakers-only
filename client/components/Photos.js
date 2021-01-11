import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';
import SinglePhoto from './SinglePhoto';
import { getPhotos } from '../store/photos';

class Photos extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { photos } = this.props;
    if(!photos.length) return null;
    return (
      photos.map((photo) => (
        <SinglePhoto imageUrl={photo.imageUrl} title={photo.title} />
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
});

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => dispatch(getPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
