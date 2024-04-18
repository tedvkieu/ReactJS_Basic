import React from 'react';
import UserInfor from './Userinfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Kieu ne', age: 21 },
            { id: 2, name: 'Gon', age: 22 },
            { id: 3, name: 'Tedvkieu', age: 23 },
        ],
    };
    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        // Dry: Don't repeat yourselt
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>

                <hr></hr>
                <DisplayInfor listUser={this.state.listUsers}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;
