import React from 'react';
import UserInfor from './Userinfor';

class MyComponent extends React.Component {
    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
            </div>
        );
    }
}

export default MyComponent;
