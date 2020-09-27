import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, Switch, Route,
  } from 'react-router-dom';

import Create from './views/Create';
import Feed from './views/Feed';
import Layout from './views/Layout'
import Login from './views/Login';
import NotFound from './views/NotFound';
import Settings from './views/Settings';
import Timeline from './views/Timeline';

import './css/app.css'

document.body.style.backgroundImage = "url('introbackground.png')"
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/create" component={Create} />
            <Route path="/login" component={Login} />
            <Route path="/feed" component={Feed} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/settings" component={Settings} />
            {/* Only useful in development mode */}
            <Route component={NotFound} status={404} />
        </Switch>
    </Router>,
document.getElementById('root'),
);