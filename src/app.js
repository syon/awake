/* @type */
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main.jsx';

import "./css/app.css"

ReactDOM.render(
  <Main message='and GoodBye World' date={new Date()} />,
  document.getElementById('app')
)
