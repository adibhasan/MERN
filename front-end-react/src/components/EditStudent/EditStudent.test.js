import React from 'react';
import ReactDOM from 'react-dom';
import EditStudent from './EditStudent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditStudent />, div);
  ReactDOM.unmountComponentAtNode(div);
});