import React from 'react';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true,
    };
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };

    render() {
        const { listUser } = this.props;
        console.log(listUser);
        return (
            <div>
                <div>
                    <span
                        onClick={() => {
                            this.handleShowHide();
                        }}>
                        {this.state.isShowListUser === true
                            ? 'Hide List User'
                            : 'Show List User'}
                    </span>
                </div>
                {this.state.isShowListUser && (
                    <div>
                        {listUser.map((item) => {
                            return (
                                <div>
                                    <div
                                        key={item.id}
                                        className={
                                            +item.age > 18 ? 'green' : 'red'
                                        }>
                                        <div>My name's {item.name}</div>
                                        <div>My age's {item.age}</div>
                                        <hr></hr>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}
export default DisplayInfor;
