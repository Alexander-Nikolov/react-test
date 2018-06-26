import React, { Component } from 'react';


class Programme extends Component {

    state = {

    };



    render() {
        return (
            <div>
                {this.props.item.programme.map((programme) =>
                    <div>
                        <div>Name: {programme.name}</div>
                        <div>Disc: {programme.disc}</div>
                    </div>
                )}
            </div>
        )
    }
}

export default Programme;
