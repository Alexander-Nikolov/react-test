import React  from 'react';

import { Link } from 'react-router-dom';

const CinemaItem = (props) => {
    console.log(props)

    return <div>
        <div>
            <img src={props.image} alt=""/>
        </div>
        <div>
            Name: {props.name}
        </div>
        <div>
            Address: {props.address}
        </div>
        <div>
            Work time: {props.workTime}
        </div>
        <div>
            {props.programme.id}
            <Link to={`/programme/${props.programme.id}`}>Programme</Link>
        </div>
        </div>
}

export default CinemaItem;
