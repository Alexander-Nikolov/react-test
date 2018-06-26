import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as ActionCreators from "../actions/user";

class Login extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasError: false,
            hasErrorLogIn: false,
            users: [
                {
                    username: 'Gosho',
                    password: 'asd1'
                },
                {
                    username: 'Pesho',
                    password: 'asd2'
                },
                {
                    username: 'Asd',
                    password: 'asd1'
                }
            ]
        };
        this.dispatch = props.dispatch;
        this.login = bindActionCreators(ActionCreators.login, this.dispatch);
    }

    changeHandler(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    logIn() {
        if (!this.state.username || !this.state.password) {
            this.setState({
                hasError: true,
                hasErrorLogIn: false
            });
            return;
        }
        let foundUser = this.state.users.find((user) => {
            return user.username === this.state.username && user.password === this.state.password;
        });

        if (foundUser) {
            this.login(foundUser)
        } else {
            this.setState({
                hasErrorLogIn: true,
                hasError: false
            });
        }
    }

    render() {

        return (
            <div>
                <input type="text" name="username" value={this.state.username} onChange={(event) => this.changeHandler(event)}/>
                <input type="password" name="password" value={this.state.password} onChange={(event) => this.changeHandler(event)} />
                <div>
                    <button onClick={() => {this.logIn()}}>Log In</button>
                </div>
                {this.state.hasError ? <div>All fields are required</div> : null}
                {this.state.hasErrorLogIn ? <div>Try again</div> : null}
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        user: state.user
    }
);

export default connect(mapStateToProps)(Login);
