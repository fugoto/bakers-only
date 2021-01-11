/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePhoto from './SinglePhoto';
import { getPhotos } from '../store/photos';

class Photos extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { photos } = this.props;
    if (!photos.length) return null;
    console.log('photos', photos)
    return (
      <div className="photos">
        { photos.map((photo) => <SinglePhoto imageUrl={photo.imageUrl} title={photo.title} />) }
      </div>
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
