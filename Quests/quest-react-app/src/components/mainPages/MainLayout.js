import React, {Component} from "react";
import Home from "./home/Home";
import Genre from "./genre/Genre";
import Reviews from "./reviews/Reviews";
import QuestLocation from "./questLocation/QuestLocation";
import NoMatch from "./noMatch/NoMatch";
import {Route, Switch} from 'react-router';
import Header from "./header/Header";
import Footer from "./footer/Footer";

const ROUTES = [
    {path: '/', exact: true, component: Home},
    {path: '/genre', exact: true, component: Genre},
    {path: '/reviews', exact: true, component: Reviews},
    {path: '/quest-location', exact: true, component: QuestLocation},
    {path: '*', component: NoMatch},
];

class MainLayout extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <Header/>
                <Switch>
                    {ROUTES.map((route, index) => {
                        return <Route key={index} {...route} />
                    })}
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default MainLayout;