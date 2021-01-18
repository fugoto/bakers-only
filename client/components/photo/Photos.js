/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePhoto from './SinglePhoto';
import { getPhotos } from '../../store/photos';
import Tags from './Tags';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
    this.getTag = this.getTag.bind(this);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  getTag(e) {
    const { tags } = this.state;
    if (e.target.checked) this.setState({ tags: [...tags, e.target.name] });
    else this.setState({ tags: tags.filter(tag => tag !== e.target.name) });
  }

  filterPhotos() {
    const { tags } = this.state;
    const { photos } = this.props;
    const userIdFilter = this.props.match.params.userId * 1;
    if (!tags.length && !userIdFilter) return photos;
    if (userIdFilter) return photos.filter(photo => photo.user.id === userIdFilter);
    return photos.filter(photo => {
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (!photo.tags.includes(tag)) return false;
      }
      return photo;
    });
  }

  render() {
    const { photos } = this.props;
    if (!photos.length) return null;
    return (
      <>
        <Tags getTag={this.getTag} />
        <div className="photos">
          { this.filterPhotos().map(photo => <SinglePhoto photo={photo} />) }
        </div>
      </>
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
