import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Kieu',
        address: 'TPHCM',
        age: 21,
    };

    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;
