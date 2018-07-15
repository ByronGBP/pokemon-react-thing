import React, { Component } from 'react';
import type { ApiData } from '../types/api';

type Props = {
  pokemon: ApiData
}

class Pokemon extends Component<Props> {

  componentDidMount() {
    this.props.handleMount(this.props.match.params.id);
  }

  render() {
    const { fields, id, isFetching } = this.props.pokemon;
    
    if (isFetching) {
      return <div>Loading...</div>;
    }

    const values = Object.values(fields);
    const key = Object.keys(fields);

    return (
      <div className="container">
        <div className="list-group">
          {values.map((elem, index) => {
            return <div key={index} className="list-group-item">{`${key[index]}: ${elem}`}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Pokemon;