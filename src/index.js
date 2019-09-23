import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Search from './Search'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/search" component={Search} />
    <Route exact path="/" component={App} />
  </BrowserRouter>, document.getElementById('root'));
