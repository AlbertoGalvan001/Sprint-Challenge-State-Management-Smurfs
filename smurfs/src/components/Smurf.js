import React from 'react';

export default function Smurf(props) {
    return (
        <div className='smurf'>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    );
}