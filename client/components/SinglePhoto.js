import React from 'react';
import {
  Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';

export default function SinglePhoto(props) {
  const { imageUrl, title } = props;
  return (
    <Card variant="outlined" className="photo-card" style={{ width: '33%' }}>
      <CardMedia
        component="img"
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="h3">
          Hi, my name is:
        </Typography>
        <Typography>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
