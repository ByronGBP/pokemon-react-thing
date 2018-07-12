// @flow
// $FlowFixMe
import './styles/main';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

const title: string = 'YOUH!';
const container: any = document.getElementById('main-container');

ReactDOM.render(<Hello title={title}/>, container);
