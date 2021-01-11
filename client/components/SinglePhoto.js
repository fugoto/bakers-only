import React, { Component } from 'react';
import {
  Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';

const imageUrl = './images/cat1.jpeg';
const catName = 'Dorothy';

export default class SinglePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
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
              {catName}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
