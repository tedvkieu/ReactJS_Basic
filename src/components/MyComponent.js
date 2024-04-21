import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Kieu ne', age: 110 },
            { id: 2, name: 'Gon', age: 16 },
            { id: 3, name: 'Tedvkieu', age: 23 },
        ],
    };

    handleAddNewUser = (userObj) => {
        //Cach 1
        this.setState({
            listUsers: [...this.state.listUsers, userObj], // copy lai trang thai mang dang co
        });
        // ---------------------------- cach 2
        // let listUserClone = [...this.state.listUsers];
        // listUserClone.unshift(userObj);
        // this.setState({
        //     listUsers: listUserClone,
        // });
    };
    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        // Dry: Don't repeat yourselt
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
                <br></br>

                <hr></hr>
                <DisplayInfor listUser={this.state.listUsers}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;
