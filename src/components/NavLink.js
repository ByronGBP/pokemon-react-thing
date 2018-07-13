// @flow
import React, { type Node, Component } from 'react';
import { Link } from 'react-router-dom';

import type { NavPath } from '../types/navbar'; 

export type Props = {
  active: boolean,
  children: Node,
  path: NavPath,
  location: NavPath,
  handleClick: () => void,
  handleMount: () => void
};

class NavLink extends Component<Props> {

  componentDidMount() {
    const  {location, path} = this.props;
    if (location === path) {
      this.props.handleMount();
    }
  }

  render() {
    const {active, children, handleClick, path} = this.props;

    if (active) {
      return <div className="nav-link active">{children}</div>;
    }
    
    return (
      <Link className="nav-link" to={`/${path}`} onClick={handleClick}>
        {children}
      </Link>
    );
  }
}

export default NavLink;
