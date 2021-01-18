/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Card, CardMedia, CardContent, CardHeader, Typography, TextField, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SinglePhoto(props) {
  const {
    type, getPhotoUrl, getTitle,
  } = props;
  const {
    imageUrl, title, tags, user,
  } = props.photo;
  return (
    <>
      <Card variant="outlined" className="photo-card" >
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
                Tags: { tags.join(', ') }
              </Typography>
            )
            : null }
          {
                type === 'add' || type === 'edit' || !user
                  ? null
                  : (
                    <Typography>
                      Baked with ❤️ by <Link to={`/${user.id}`}>{ user.username }</Link>
                    </Typography>
                  )
            }
        </CardContent>
      </Card>
    </>
  );
}
