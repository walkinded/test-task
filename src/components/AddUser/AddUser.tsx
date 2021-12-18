import React from 'react'
import {Link} from 'react-router-dom';


interface NewItemsProps {
  fullName: string;
  setFullName: (fullName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  birthday: string;
  setBirthday: (birthday: string) => void;
  sex: string;
  setSex: (sex: string) => void;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  resetInputs: () => void;
}

const AddUser: React.FC<NewItemsProps> = 
  ({
    fullName,
    setFullName,
    email,
    setEmail,
    birthday,
    setBirthday,
    sex,
    setSex, 
    handleSubmit,
    resetInputs
  }) => {
  return (
    <div className='box-container'>
      <form className='add-form'>
        <div className="input-wrap">
          <label htmlFor='add-user'>Full name</label>
          <input
            autoFocus
            id='fullName'
            placeholder='Full name'
            // required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        
        <div className="input-wrap">
          <label htmlFor='add-user'>Email</label>
          <input
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            id='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        

        <div className="input-wrap">
          <label htmlFor='add-user'>Birthday</label>
          <input
            
            type='date'
            id='birthday'
            placeholder='Add user'
            // required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        
        <div className="input-wrap">
          <label>Sex</label>
          <div className="form_radio">
            <input
              
              id="radio-1"
              type="radio"
              name="radio"
              value={sex}
              onChange={() => setSex('male')}
            />
            <label htmlFor="radio-1">male</label>
          </div>
          
          <div className="form_radio">
            <input
              id="radio-2"
              type="radio"
              name="radio"
              value={sex}
              onChange={() => setSex('female')}
            />
            <label htmlFor="radio-2">female</label>
          </div>
        </div>
        
        <div className='button-wrap'>
          <button
            onClick={handleSubmit}
            type='submit'
            aria-label='Add user'
          >
            Add
          </button>
          <Link onClick={() => resetInputs} to={'/'}><button>Close</button></Link>
        </div>
        
      </form>
    </div>
  )
}

export {AddUser};
