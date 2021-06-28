import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import MainLayout from "./components/mainPages/MainLayout";
import './App.scss';

const history = createBrowserHistory();

export class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <MainLayout/>
            </BrowserRouter>
        );
    }
}

export default App;