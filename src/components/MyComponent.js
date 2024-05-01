import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Kieu ne', age: 110 },
        { id: 2, name: 'Gon', age: 16 },
        { id: 3, name: 'Tedvkieu', age: 23 },
    ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);

        setListUsers(listUsersClone);
    };

    return (
        <>
            <br />
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}></AddUserInfor>
                <br></br>
                <hr></hr>
                <DisplayInfor
                    listUser={listUsers}
                    handleDeleteUser={handleDeleteUser}></DisplayInfor>
            </div>
            <div className="b"></div>
        </>
    );
};

export default MyComponent;
