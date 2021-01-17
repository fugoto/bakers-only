import React from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import { TAGS } from '../../../constants';

export default function Tags(props) {
  return (
    <FormGroup row>
      { TAGS.map((tag) => (
        <FormControlLabel
          control={<Checkbox onChange={props.getTag} name={tag} />}
          label={tag}
        />
      ))}
      {/* <FormControlLabel
          control={<Checkbox onChange={this.props.getTag} name="Eggs" />}
          label="Eggs"
        />
        <FormControlLabel
          control={<Checkbox onChange={this.props.getTag} name="Vegan" />}
          label="Vegan"
        /> */}
    </FormGroup>
  );
}
