import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'
import App from './components/App'
import Results from './components/Results'
import Router, { Route } from 'react-router'
import { List } from 'immutable'


const routes = <Route component={App}>
  <Route path="/" component={Voting} />
  <Route path="/results" component={Results} />
</Route>

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)
