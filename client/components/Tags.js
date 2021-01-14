import React, { Component } from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

export default class Tags extends Component {
  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox onChange={this.props.getTag} name="Eggs" />}
          label="Eggs"
        />
        <FormControlLabel
          control={<Checkbox onChange={this.props.getTag} name="Vegan" />}
          label="Vegan"
        />
      </FormGroup>
    );
  }
}
