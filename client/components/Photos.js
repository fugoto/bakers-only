import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';
import SinglePhoto from './SinglePhoto';
import { getPhotos } from '../store/photos';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { photos } = this.props;
      return (
        photos.map((photo) => {
          return(
            <Card variant="outlined" id="profileImages">
              <CardMedia
                component="img"
                image={photo.imageUrl}
              />
              <CardContent>
                <Typography variant="h5">
                  Hi, my name is:
                </Typography>
                <Typography>
                  {photo.title}
                </Typography>
              </CardContent>
            </Card>
          )
        })
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
