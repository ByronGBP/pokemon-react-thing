// @flow
import React, { Component } from 'react';

type Props = {
  title: string,
};

class Hello extends Component<Props> {
  render () {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

export default Hello;
