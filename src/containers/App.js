import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions/user';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';
import images from '../images'

import Login from '../components/Login';
import Home from '../components/Home';

import ErrorBoundary from '../components/ErrorBoundary';

axios.defaults.baseURL = 'http://api.giphy.com/';

class App extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render() {
        const { user } = this.props;


        return (
            <div className="App">
                <ErrorBoundary>
                    <BrowserRouter>
                        <div>
                            {user.isLogged ? <Home/> : <Login />}
                        </div>
                    </BrowserRouter>
                </ErrorBoundary>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        user: state.user
    }
);

export default connect(mapStateToProps)(App);