import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditUser = ({
  items, editFullName, setEditFullName, editEmail, setEditEmail, editBirthday, setEditBirthday, editSex, setEditSex,  handleEdit
}) => {
  const { id } = useParams();
  const item = items.find(item => (item.id).toString() === id);
  useEffect(() => {
    if (item) {
      setEditFullName(item.fullName);
      setEditEmail(item.email);
      setEditBirthday(item.birthday);
      setEditSex(item.sex);
    }

  }, [item, setEditFullName, setEditEmail, setEditBirthday, setEditSex])
  return (
    <div className='box-container'>
    {editFullName &&
      <>
        <form className='add-form' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='add-user'>Full name</label>
          <input
            
            id='fullName'
            placeholder='Full name'
            // required
            value={editFullName}
            onChange={(e) => setEditFullName(e.target.value)}
          />
          <label htmlFor='add-user'>Email</label>
          <input
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            id='email'
            placeholder='Email'
            required
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
          <label htmlFor='add-user'>Birthday</label>
          <input
            
            type='date'
            id='birthday'
            placeholder='Add user'
            // required
            value={editBirthday}
            onChange={(e) => setEditBirthday(e.target.value)}
          />
          <div className="form_radio">
            <input
              
              id="radio-1"
              type="radio"
              name="radio"
              value={editSex = 'male'}
              onChange={(e) => setEditSex(e.target.value)}
            />
            <label htmlFor="radio-1">male</label>
          </div>
          
          <div className="form_radio">
            <input
              
              id="radio-2"
              type="radio"
              name="radio"
              value={editSex = 'female'}
              onChange={(e) => setEditSex(e.target.value)}
            />
            <label htmlFor="radio-2">female</label>
          </div>
          <div className='button-wrap'>
        <button
          onClick={() => handleEdit(item.id)}
          type='submit'
          aria-label='Edit user'
        >
          Ok
        </button>
        <Link to={'/'}><button>Close</button></Link>
      </div>
        
          </form>
      </>
    }
    {!editFullName &&
      <>
        <h2>User not fount</h2>
      </>
    }
    </div>
  )
}

export default EditUser;
