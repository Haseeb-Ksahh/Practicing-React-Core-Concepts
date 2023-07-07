import React from 'react';
import ReactDOM from 'react-dom';

const heading1 = React.createElement('h1', { id: 'heading1' }, 'Heading first');
const heading2 = React.createElement('h1', { id: 'heading2' }, 'Second h1');
const div = React.createElement('div', {}, [heading1, heading2]);

ReactDOM.render(div, document.getElementById('root'));
