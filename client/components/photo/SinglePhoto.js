/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Card, CardMedia, CardContent, CardHeader, Typography, TextField, Button,
} from '@material-ui/core';

export default function SinglePhoto(props) {
  const {
    type, getPhotoUrl, getTitle,
  } = props;
  const { imageUrl, title, tags } = props.photo;
  return (
    <>
      <Card variant="outlined" className="photo-card" style={{ width: '33%' }}>
        { type === 'add'
          ? <TextField label="Title" onChange={getTitle} />
          : (
            <CardHeader title={title} />
          ) }
        <CardMedia
          component="img"
          image={imageUrl || './images/notFound.png'}
        />
        { type === 'add'
          ? <Button id="upload_widget" variant="contained" color="secondary" onClick={getPhotoUrl}>Upload Photo</Button>
          : null }
        <CardContent>
          { tags.length
            ? (
              <Typography>
                Tags: 
                { tags.join(', ') }
              </Typography>
            )
            : null }
        </CardContent>
      </Card>
    </>
  );
}
