import React, { useState } from 'react';

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    //const [address, setAddress] = useState('');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    };
    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + ' random',
            name: name,
            age: age,
        });
    };
    return (
        <div>
            <h5>My name is {name}</h5>
            <h5>I'm {age} years old</h5>

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    onChange={(event) => {
                        handleOnChangeInput(event);
                    }}
                />
                <button>Submit</button>
                <label>Your age: </label>
                <input
                    value={age}
                    onChange={(event) => {
                        handleOnChangeAge(event);
                    }}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUserInfor;
