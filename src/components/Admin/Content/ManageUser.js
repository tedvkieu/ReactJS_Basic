import ModelCreateUser from './ModelCreateUser';
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-conetent">
                <div>
                    <button>Add new User</button>
                </div>
                <div>
                    Table Users
                    <ModelCreateUser />
                </div>
            </div>
        </div>
    );
};

export default ManageUser;
