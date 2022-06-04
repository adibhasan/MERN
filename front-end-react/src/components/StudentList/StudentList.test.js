import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './StudentList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentList />, div);
  ReactDOM.unmountComponentAtNode(div);
});