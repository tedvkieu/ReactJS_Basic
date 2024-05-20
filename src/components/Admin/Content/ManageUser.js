import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';

import TableUser from './TableUser';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiServices';
import ModelCreateUser from './ModelCreateUser';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';

const ManageUser = (props) => {
    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [dataUpdate, setDateUpdate] = useState({});

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

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDateUpdate(user);
    };

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDateUpdate(user);
    };

    const resetUpdateData = () => {
        setDateUpdate({});
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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                    />
                </div>
                <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    );
};

export default ManageUser;
