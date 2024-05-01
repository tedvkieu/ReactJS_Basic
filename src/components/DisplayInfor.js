import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss';
import logo1 from './../logo.svg';

const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };

    console.log('call me render'); // Hàm render sẽ chạy trước nhất
    useEffect(() => {
        // UseEffect function co tac dung nhu ham Didmount
        // setTimeout(() => {
        //     document.title = 'Kieu ne';
        // }, 3000);
        if (listUser.length === 0) {
            alert('you deleted all user');
        }
        console.log('call me useEffect');
    }, [listUser]); // [] sẽ được hiểu là hàm sẽ được chạy 1 lần thay vì khi render lại sẽ chạy lại
    // Khi [] có tham số được truyền vào thì nó sẽ được thực thi lại ngay sau render và được hiểu là DidUpdate

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
