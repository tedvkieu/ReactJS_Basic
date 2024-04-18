import React from 'react';
import UserInfor from './Userinfor';
import MyComponent from './MyComponent';

class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props;

        return (
            <div>
                {listUser.map((item) => {
                    console.log(item);
                    return (
                        <div key={item.id}>
                            <div>My name's {item.name}</div>
                            <div>My age's {item.age}</div>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default DisplayInfor;
