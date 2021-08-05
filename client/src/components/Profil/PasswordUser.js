import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { modifiePassword } from '../../redux/action/action_Register';
import './EditUser.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const PasswordUser = ({ users }) => {
    console.log('edit users', users);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const dispatch = useDispatch();
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}><i className="fas fa-unlock-alt fa-2x"></i></button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={() => {
                            dispatch(modifiePassword(users.id , password, newPassword));
                            // dispatch(getUser());
                            closeModal();
                        }}
                    >
                        Confirm
                    </button>
                    <button onClick={closeModal}>Cancel</button>
                </form>
            </Modal>
        </div>
    );
};

export default PasswordUser;
