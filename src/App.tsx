import React from "react";
import Homepage from "./views/HomePage";
import Division from "./views/Divisions";
import Vanity from "./views/Vanity";
import Sendgrid from "./views/Sendgrid";
import Event from "./views/Event";
import Form from "./views/Form";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BrowserView>
          <Switch>
            <Route path="/" component={Vanity} exact />
            <Route path="/divisions" component={Division} exact />
            <Route path="/vanity" component={Vanity} exact />
            <Route path="/sendgrid" component={Sendgrid} exact />
            <Route path="/event" component={Event} exact />
            <Route path="/form" component={Form} exact />
            <Route path="/home" component={Homepage} exact />
          </Switch>
        </BrowserView>

        <MobileView>
        <Switch>
            <Route path="/" component={Vanity} exact />
            <Route path="/divisions" component={Division} exact />
            <Route path="/vanity" component={Vanity} exact />
            <Route path="/sendgrid" component={Sendgrid} exact />
            <Route path="/event" component={Event} exact />
            <Route path="/form" component={Form} exact />
            <Route path="/home" component={Homepage} exact />
          </Switch>
        </MobileView>
      </BrowserRouter>
    </div>
  );
}

export default App;
