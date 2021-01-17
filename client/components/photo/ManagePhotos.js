import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import SinglePhoto from './SinglePhoto';
import { deletePhotos } from '../../store/photos';

class ManagePhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIdsToDelete: [],
    };
    // this.editPhoto = this.editPhoto.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.deletePhotos = this.deletePhotos.bind(this);
  }

  // editPhoto(photo) {
  //   return (
  //     <Redirect
  //     to={{
  //       pathname: `/editPhotos/${photo.id}`,
  //       state: { photo: photo },
  //     }}
  //   />
  //   )
  // }

  selectPhoto(e) {
    const { photoIdsToDelete } = this.state;
    if (e.target.checked) this.setState({ photoIdsToDelete: [...photoIdsToDelete, e.target.value] });
    else this.setState({ photoIdsToDelete: photoIdsToDelete.filter(photoId => photoId !== e.target.value) });
  }

  deletePhotos() {
    this.props.deletePhotos(this.state.photoIdsToDelete);
  }

  render() {
    const { user } = this.props;
    if (!user.id) return (
      <Link to="/login">Please log in to add a photo</Link>
    );
    return (
      <>
        <div className="photos">
          { user.photos.map((photo) => (
            <div className="delete-photo">
              <SinglePhoto type="edit" imageUrl={photo.imageUrl} title={photo.title} />
              {/* <Checkbox onChange={this.selectPhoto} value={photo.id} label="Delete" /> */}
              <FormControlLabel
                control={<Checkbox onChange={this.selectPhoto} value={photo.id} />}
                label="Delete"
              />
              {/* <Button onClick={() => this.editPhoto(photo)}>Edit photo</Button> */}
            </div>
          )) }
        </div>
        <Button onClick={this.deletePhotos} variant="contained" color="secondary" >Delete selected photos</Button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  deletePhotos: (photoIds) => dispatch(deletePhotos(photoIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagePhotos);
