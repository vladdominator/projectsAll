import React, {Component} from 'react';
import {Switch, Route} from 'react-router'
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Exhibition from "./exhibition/Exhibition";
import Shop from "./shop/Shop";
import Home from "./home/Home";
import NoMatch from "./noMatch/NoMatch";

const ROUTES = [
  {path: '/', exact: true, component: Home},
  {path: '/exhibition', exact: true, component: Exhibition},
  {path: '/shop', exact: true, component: Shop},
  {path: '*', component: NoMatch},
];

class MainLayout extends Component {
  render() {
    return <div className='main-wrapper'>
      <Header/>
      <Switch>
        {ROUTES.map((route, index) => (
            <Route key={index} {...route} />
        ))}
      </Switch>
      <Footer/>
    </div>
  }
}

export default MainLayout;