import React, { Component } from 'react';
import Photos from './Photos';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <h1>Say hi to your baker friends</h1>
        <div>
          <Photos />
        </div>
      </>
    );
  }
}
