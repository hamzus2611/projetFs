import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { edit_user } from '../../redux/action/action_Register';
// import {addUser, editUser, getUser} from '../redux/actions';
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

const EditUser = ({ users }) => {
  console.log('edit users', users);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [username, setUsername] = useState(users.username);
  const [lastname, setLastname] = useState(users.lastname);
  const [email, setEmail] = useState(users.email);
  const [phone, setPhone] = useState(users.phone);
  const id = users.id
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}><i className="fas fa-cog fa-2x"></i></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="group">

            <label htmlFor="pass" className="label">
              Country
            </label>

          </div>


          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            type="submit"
            onClick={() => {
              dispatch(edit_user(id, username, lastname, email, phone));
              //dispatch(getUser());
              closeModal();
              window.location.reload(true);
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

export default EditUser;
