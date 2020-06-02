import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/context';

const SmurfCard = props => {
    return (
        <div>
            <h3>Name: {props.smurf.name} </h3>
        </div>
    )
}

export default SmurfCard;