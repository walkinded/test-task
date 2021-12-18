import React from 'react'
import {Link} from 'react-router-dom';

const AddItem = ({newFullName, setNewFullName, newEmail, setNewEmail, newBirthday, setNewBirthday, newSex, setNewSex,  handleSubmit}) => {

  const clearField = () => {
    setNewFullName('');
    setNewEmail('');
    setNewBirthday('');
    setNewSex('');
  }
  return (
    <div className='box-container'>
      <form className='add-form' onSubmit={handleSubmit}>
        <label htmlFor='add-user'>Full name</label>
        <input
          autoFocus
          id='fullName'
          placeholder='Full name'
          // required
          value={newFullName}
          onChange={(e) => setNewFullName(e.target.value)}
        />
        <label htmlFor='add-user'>Email</label>
        <input
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          id='email'
          placeholder='Email'
          required
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <label htmlFor='add-user'>Birthday</label>
        <input
          
          type='date'
          id='birthday'
          placeholder='Add user'
          // required
          value={newBirthday}
          onChange={(e) => setNewBirthday(e.target.value)}
        />
        <div className="form_radio">
          <input
            
            id="radio-1"
            type="radio"
            name="radio"
            value={newSex = 'male'}
            onChange={(e) => setNewSex(e.target.value)}
          />
          <label htmlFor="radio-1">male</label>
        </div>
        
        <div className="form_radio">
          <input
            
            id="radio-2"
            type="radio"
            name="radio"
            value={newSex = 'female'}
            onChange={(e) => setNewSex(e.target.value)}
          />
          <label htmlFor="radio-2">female</label>
        </div>
        <div className='button-wrap'>
          <button
            type='submit'
            aria-label='Add user'
          >
            Add
          </button>
          <Link onClick={clearField} to={'/'}><button>Close</button></Link>
        </div>
        
      </form>
    </div>
  )
}

export default AddItem;
