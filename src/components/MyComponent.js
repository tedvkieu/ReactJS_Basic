import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Kieu',
        address: 'TPHCM',
        age: 21,
    };

    handleClick(event) {
        console.log('click me my button');
        console.log('My name is ', this.state.name);
    }
    handleOnMoverOver(event) {
        console.log(event);
    }
    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me!</button>
                <button onMouseOver={this.handleOnMoverOver}>Hover me!</button>
            </div>
        );
    }
}

export default MyComponent;
