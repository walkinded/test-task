import React from 'react'
import { UserItem } from '../UserItem/UserItem';
import { IUser } from '../types/data'

import './UserList.css';

interface IUserList {
  users: IUser[];
  deleteUser: (id: number) => void;
} 

const UserList: React.FC<IUserList> = (props) => {

  const { users, deleteUser } = props;
  return (
    <div className='table__wrapper'>
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Sex</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
        { 
            users.map(user => (
              <UserItem 
                key={user.id} 
                deleteUser={deleteUser} 
                {...user}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export { UserList }