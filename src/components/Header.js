// @flow

import Link from '../containers/Link';
import React from 'react';
import type { NavPath } from '../types/navbar';

type Props = {
  currentPath: string
}

const Header = ({ currentPath }: Props) => {

  // NOTE:- Think about how to avoid this
  const aux: any = currentPath.substr(1);
  const location: NavPath = aux;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link location={location} path="">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="left collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link location={location} path="pokemons">Pokemons</Link>
          </li>
          <li className="nav-item">
            <Link location={location} path="types">Types</Link>
          </li>
          <li className="nav-item">
            <Link location={location} path="moves">Moves</Link>
          </li>
          <li className="nav-item">
            <Link location={location} path="colors">Colors</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;