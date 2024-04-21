import React from 'react';
import './DisplayInfor.scss';
import logo1 from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowListUser: true,
        };
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };

    render() {
        const { listUser } = this.props;
        console.log(listUser);
        return (
            <div className="displayInfor-container">
                <img src={logo1} />
                <div key={this.state.isShowListUser}>
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
                        {listUser.map((item, index) => {
                            return (
                                <div
                                    key={item.id}
                                    className={
                                        +item.age > 18 ? 'green' : 'red'
                                    }>
                                    <div>
                                        <div>My name's {item.name}</div>
                                        <div>My age's {item.age}</div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={() =>
                                                this.props.handleDeleteUser(
                                                    item.id
                                                )
                                            }>
                                            Delete
                                        </button>
                                    </div>
                                    <hr />
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
