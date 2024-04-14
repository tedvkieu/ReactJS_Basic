import React from 'react';

class MyComponent extends React.Component {
    //JSX : chỉ có React có. Cho phép code JS ngay trong HTML
    render() {
        return (
            <div>
                My first Component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;
