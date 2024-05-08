import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss';
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-conetent">
                <div>
                    <button>Add new User</button>
                </div>
                <div>Table Users</div>
            </div>
            <ModelCreateUser />
        </div>
    );
};

export default ManageUser;
