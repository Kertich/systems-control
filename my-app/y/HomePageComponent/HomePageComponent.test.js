import React from 'react';
import ReactDOM from 'react-dom';
import HomePageComponent from './HomePageComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePageComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});