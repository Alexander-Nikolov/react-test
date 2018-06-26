import React, { Component } from 'react';



class ErrorBoundary extends Component {

    state = {
        hasErrors: false
    };

    componentDidCatch(errorInfo, errorMessage) {
        this.setState({
            hasErrors: true
        });
    }

    render() {
        if (this.state.hasErrors) {
            return <h1>Error</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
