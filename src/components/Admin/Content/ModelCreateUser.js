import { eventWrapper } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';

const ModelCreateUser = (props) => {
    const { show, setShow } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [role, setRole] = useState('USER');
    const [previewImg, setPreviewImg] = useState('');

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setPassword('');
        setImage('');
        setUsername('');
        setRole('USER');
        setPreviewImg('');
    };
    const handleUploadImage = (event) => {
        if (event.target.files && event.target && event.target.files[0]) {
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            //setPreviewImg('');
        }
    };

    const handleSubmitCreateUser = async (event) => {
        //validate

        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: image,
        // };
        // console.log(data);
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);

        let res = await axios.post(
            'http://localhost:8081/api/v1/participant',
            data
        );
        console.log('check res: ', res);
    };

    return (
        <>
            <Modal
                className="modal-add-user"
                size="xl"
                show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                value={email}
                                className="form-control"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                value={password}
                                className="form-control"
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">User Name</label>
                            <input
                                type="text"
                                value={username}
                                className="form-control"
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) => {
                                    setRole(event.target.value);
                                }}>
                                <option selected value="USER">
                                    USERS
                                </option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label
                                className="form-label label-upload"
                                htmlFor="labelUpload">
                                <FcPlus />
                                Upload File Image
                            </label>
                            <input
                                id="labelUpload"
                                type="file"
                                hidden
                                onChange={(event) => {
                                    handleUploadImage(event);
                                }}
                            />
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImg ? (
                                <img src={previewImg} />
                            ) : (
                                <span> Preview Image</span>
                            )}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModelCreateUser;
