import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import App from './app'
import PartDetailList from './partDetailList'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/partDetail/:partID" component={PartDetailList} />
  </Router>
), document.getElementById('app'))
