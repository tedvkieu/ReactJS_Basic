import React from 'react';
import UserInfor from './Userinfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        const myAge = 25;
        const myInfor = ['ab', 'c', 'd'];
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name="Duong Van Kieu" age="21"></DisplayInfor>
                <hr></hr>
                <DisplayInfor
                    name="Kiure"
                    age={myAge}
                    myInfor={myInfor}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;
