import React from 'react';
import ReactDOM from 'react-dom';
import SigninComponent from './SigninComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SigninComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});