import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from 'react';
import TableUser from './TableUser';
const ManageUser = (props) => {
    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
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
                    <TableUser />
                </div>
            </div>
            <ModelCreateUser
                show={showModelCreateUser}
                setShow={setShowModelCreateUser}
            />
        </div>
    );
};

export default ManageUser;
