import React from 'react';
import UserInfor from './Userinfor';
import MyComponent from './MyComponent';

class DisplayInfor extends React.Component {
    render() {
        console.log(this.props);
        const { age, name } = this.props;
        return (
            <div>
                <div>My name's {name}</div>
                <div>My age's {age}</div>
            </div>
        );
    }
}
export default DisplayInfor;
