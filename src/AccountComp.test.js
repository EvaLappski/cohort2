import React from 'react';
import ReactDOM from 'react-dom';
import AccountComp from './components/AccountComp'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

