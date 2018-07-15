import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { FecthData } from '../types/api';

type Props = {
  handleMount: () => {};
  pokemons: Array<FetchData>
}

class Pokemons extends Component<Props> {

  componentDidMount() {
    this.props.handleMount();
  }

  render() {
    const { items, isFetching } = this.props.pokemons;

    if (isFetching) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <ul className="list-group">
          {items.map((elem, index) => {
            return <Link to={`/pokemons/${elem.id}`}key={index} className="list-group-item list-group-item-action">{elem.fields.Name}</Link>;
          })}
        </ul>
      </div>
    );
  }
}

export default Pokemons;