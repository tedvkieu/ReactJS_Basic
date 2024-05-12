import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';

import TableUser from './TableUser';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiServices';

const ManageUser = (props) => {
    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    };

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={(event) => setShowModelCreateUser(true)}>
                        <FcPlus />
                        Add new User
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers} />
                </div>
                <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    );
};

export default ManageUser;
