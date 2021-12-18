import {Link} from 'react-router-dom';
import './UserItem.css';
import Modal from '../modal/modal';
import { useState } from 'react';
import { IUser } from '../types/data'

interface IUserItem extends IUser  {
  deleteUser: (id: number) => void;
}

const UserItem: React.FC<IUserItem> = (user) => {
  const { id, fullName, email, birthday, sex, deleteUser } = user;
  const [modalActive, setModalActive] = useState(false);
  return (
    <tr>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{birthday}</td>
      <td>{sex}</td>
      <td>
        <div className='button-wrap'>
          
          <button className='delete' onClick={() => setModalActive(true)
            
          }><i className="far fa-trash-alt"></i></button>
          <Modal active={modalActive} setActive={setModalActive}>
            <div className='delete-info'>
            <p>Do you go to delete a user?</p>
              <div className='button-wrap'>
                <button onClick={() => deleteUser(id)}>Yes</button>
                <button onClick={() => setModalActive(false)}>No</button>
              </div>
            </div>
              
              
            </Modal>
          <Link to={`/edit/${(id).toString()}`}><button className='edit'><i className="fas fa-edit"></i></button></Link>
        </div>
        
      </td>
    </tr>
  )
}

export { UserItem };
