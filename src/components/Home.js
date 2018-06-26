import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Cinema from './Cinema/Cinema'

class Home extends Component {

    state = {

    };



    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/'} render={({ match }) => <Cinema match={match} />}/>
                </Switch>
            </div>
        )
    }
}

export default Home;
