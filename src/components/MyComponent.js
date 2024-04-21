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
            listUsers: [userObj, ...this.state.listUsers], // copy lai trang thai mang dang co
        });
    };
    handleDeleteUser = (userId) => {
        //let listUserClone = { ...this.state.listUsers };
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);
        this.setState({
            listUsers: listUsersClone,
        });
    };
    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        // Dry: Don't repeat yourselt
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
                    <br></br>

                    <hr></hr>
                    <DisplayInfor
                        listUser={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}></DisplayInfor>
                </div>
                <div className="b"></div>
            </>
        );
    }
}

export default MyComponent;
