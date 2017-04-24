var React = require('react');

var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
    <ListManager title='Todo List' />,
    document.getElementById('todoApp')
);
