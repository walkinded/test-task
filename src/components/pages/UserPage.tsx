import {UserList} from '../UserList/UserList'
import {Link } from 'react-router-dom';
import { IUser } from '../types/data'

interface IUserPage {
  users: IUser[];
  deleteUser: (id: number) => void;
}

const UserPage: React.FC<IUserPage> = ({users, deleteUser}) => { 
  return (
    <section>
      
      <div className='box-container'>
      <h1 className='main-title'>Users list</h1>
      <Link to={`/add`}><button className="add">ADD USER</button></Link>
  
      {users.length ? (
          
          <UserList users={users} deleteUser={deleteUser}/>
        ) : (
          <p>User list is empty</p>
        )}
    </div>
      
    </section>
  )
}

export default UserPage;
