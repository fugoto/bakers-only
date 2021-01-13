/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, TextField, Button,
} from '@material-ui/core';

export default function SinglePhoto(props) {
  const {
    imageUrl, title, type, addPhoto, getPhotoUrl, getTitle,
  } = props;
  return (
    <>
      <Card variant="outlined" className="photo-card" style={{ width: '33%' }}>
        <CardMedia
          component="img"
          image={imageUrl || './images/notFound.png'}
        />
        { type === 'add'
          ? <Button id="upload_widget" variant="contained" color="secondary" onClick={getPhotoUrl}>Upload Photo</Button>
          : null }
        <CardContent>
          <Typography>
            { type === 'add'
              ? <TextField label="Title" onChange={getTitle} />
              : title }
          </Typography>
        </CardContent>
        {/* { type === 'add' ? <Button onClick={addPhoto} variant="contained" color="secondary">Add My Creation!</Button> : null } */}
      </Card>
    </>
  );
}
