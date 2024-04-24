import React, { useState } from 'react';
import './DisplayInfor.scss';
import logo1 from './../logo.svg';

// class DisplayInfor extends React.Component {
//     render() {
//         console.log('call me render ');
//         const { listUser } = this.props;
//         console.log(listUser);
//         return (
//             <div className="displayInfor-container">
//                 {true && (
//                     <>
//                         {listUser.map((item, index) => {
//                             return (
//                                 <div
//                                     key={item.id}
//                                     className={
//                                         +item.age > 18 ? 'green' : 'red'
//                                     }>
//                                     <div>
//                                         <div>My name's {item.name}</div>
//                                         <div>My age's {item.age}</div>
//                                     </div>

//                                     <div>
//                                         <button
//                                             onClick={() =>
//                                                 this.props.handleDeleteUser(
//                                                     item.id
//                                                 )
//                                             }>
//                                             Delete
//                                         </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true,
    // };
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };
    return (
        <div className="displayInfor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true
                        ? 'Hide List Users'
                        : 'Show List User'}
                </span>
            </div>
            {isShowHideListUser && (
                <>
                    {listUser.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className={+item.age > 18 ? 'green' : 'red'}>
                                <div>
                                    <div>My name's {item.name}</div>
                                    <div>My age's {item.age}</div>
                                </div>

                                <div>
                                    <button
                                        onClick={() =>
                                            props.handleDeleteUser(item.id)
                                        }>
                                        Delete
                                    </button>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default DisplayInfor;
