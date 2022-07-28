import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 100;
  apikey='fb6d570b7f6b4165adc070224650ed89';
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route apikey={this.apikey} exact path="/">
              <News
                key="general"
                pagesize={this.pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route apikey={this.apikey} exact path="/Buisness">
              <News
                key="buisness"
                pagesize={this.pagesize}
                country="in"
                category="business"
              />
            </Route>
            <Route apikey={this.apikey} exact path="/Entertainment">
              <News
                key="entertainment"
                pagesize={this.pagesize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route apikey={this.apikey} exact path="/Health">
              <News
                key="health"
                pagesize={this.pagesize}
                country="in"
                category="health"
              />
            </Route>
            <Route apikey={this.apikey} exact path="/General">
              <News
                key="general"
                pagesize={this.pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route apikey={this.apikey} exact path="/Science">
              <News
                key="science"
                pagesize={this.pagesize}
                country="in"
                category="science"
              />
            </Route>
            <Route apikey={this.apikey} exact path="/Sports">
              <News
                key="sports"
                pagesize={this.pagesize}
                country="in"
                category="sports"
              />
            </Route>
            <Route apikey={this.apikey} exact path="/Technology">
              <News
                key="technology"
                pagesize={this.pagesize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
