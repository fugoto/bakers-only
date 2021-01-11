import React from 'react';
import {
  Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';

export default function SinglePhoto(props) {
  const { imageUrl, title } = props;
  return (
    <Card variant="outlined" id="profileImages">
        <CardMedia
          component="img"
          image={imageUrl}
        />
        <CardContent>
            <Typography variant="h5">
                Hi, my name is:
            </Typography>
            <Typography>
                {title}
            </Typography>
        </CardContent>
      </Card>
  );
}
