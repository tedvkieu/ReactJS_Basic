import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmitDeleteUser = () => {
        alert('me');
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this user with email:
                    <b>
                        {dataDelete && dataDelete.email ? dataDelete.email : ''}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmitDeleteUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
