import React from 'react'
import './App.scss';
import Layout from "./layout";
import {
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from "react-router";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <Layout {...props} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
