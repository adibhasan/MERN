import React from 'react';
import ReactDOM from 'react-dom';
import CreateStudent from './CreateStudent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateStudent />, div);
  ReactDOM.unmountComponentAtNode(div);
});