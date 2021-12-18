import {Link} from 'react-router-dom';
import './item.css';
import Modal from '../modal/modal';
import { useState } from 'react';

const Item = ({item, handleDelete }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <tr>
      <td>{item.fullName}</td>
      <td>{item.email}</td>
      <td>{item.birthday}</td>
      <td>{item.sex}</td>
      <td>
        <div className='button-wrap'>
          
          <button className='delete' onClick={() => setModalActive(true)
            
          }><i className="far fa-trash-alt"></i></button>
          <Modal active={modalActive} setActive={setModalActive}>
            <div className='delete-info'>
            <p>Do you go to delete a user?</p>
              <div className='button-wrap'>
                <button onClick={() => handleDelete(item.id)} aria-label={`Delete ${item.item}`}>Yes</button>
                <button onClick={() => setModalActive(false)}>No</button>
              </div>
            </div>
              
              
            </Modal>
          <Link to={`/edit/${(item.id).toString()}`}><button className='edit'><i className="fas fa-edit"></i></button></Link>
        </div>
        
      </td>
    </tr>
  )
}

export default Item;
