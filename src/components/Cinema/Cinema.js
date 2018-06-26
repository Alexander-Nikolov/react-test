import React, { Component } from 'react';

import CinemaItem from './CinemaItem';

import { Route, NavLink, Switch } from 'react-router-dom';

import Programme from '../Programme/Programme'

class Cinema extends Component {

    state = {
        cinemaList: [
            {
                name: 'Asd',
                image: '',
                workTime: '',
                address: '',
                programme: {
                    id: 'asdd1',
                    programme: [{
                        name: 'asd',
                        disc: 'asd'
                    }]
                }
            },
            {
                name: 'Asd2',
                image: '',
                workTime: '',
                address: '',
                programme: {
                    id: 'asdd2',
                    programme: [{
                        name: 'asd',
                        disc: 'asd'
                    }]
                }
            },
            {
                name: 'Asd3',
                image: '',
                workTime: '',
                address: '',
                programme: {
                    id: 'asdd3',
                    programme: [{
                        name: 'asd',
                        disc: 'asd'
                    }]
                }
            },
        ]
    };



    render() {
        return (
            <div>

                <Switch>
                    <Route exact path={'/'} render={( ) => this.state.cinemaList.map((item, index) => <CinemaItem key={index} {...item} />)}/>
                    <Route exact path={'/programme/:id'} render={({ match}) => <Programme item={this.state.cinemaList.find((cinema) => {
                        return cinema.programme.id === match.params.id;
                    }).programme}/>}/>
                </Switch>
            </div>
        )
    }
}

export default Cinema;
