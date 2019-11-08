import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {

    const [smurf, setSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    });

    const handleChanges = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit smurf', smurf)
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.message)
            })
        setSmurf({
            name: '',
            age: 0,
            height: ''
        })
    }

    return (
        <>
            <form className='add-form' onSubmit={handleSubmit}>
                <div>
                    <label className='form-name' htmlFor='name'>Name: </label>
                    <input type='text' name='name' placeholder='...name' onChange={handleChanges} value={smurf.name} />
                </div>
                <div>
                    <label className='form-age' htmlFor='age'>Age: </label>
                    <input type='text' name='age' placeholder='...age' onChange={handleChanges} value={smurf.age} />
                </div>
                <div>
                    <label className='form-height' htmlFor=''>Height: </label>
                    <input type='text' name='height' placeholder='...height' onChange={handleChanges} value={smurf.height} />
                </div>
                <button className='button' type='submit'><span>Add Smurf</span></button>
            </form>

        </>
    );
}