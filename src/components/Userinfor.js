import React from 'react';

class UserInfor extends React.Component {
    state = {
        name: 'Kieu',
        address: 'TPHCM',
        age: 21,
    };

    handleClick = (event) => {
        console.log('click me my button');
        console.log('Random', this.state.name);
        this.setState({
            name: 'HAnh',
            age: Math.floor(Math.random() * 100 + 1),
        });
    };
    handleOnMoverOver(event) {
        console.log(event);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;
