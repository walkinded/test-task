import ItemList from '../itemList/itemList'
import {Link } from 'react-router-dom';

const UserPage = ({items, handleDelete}) => {

  return (
    <section>
      
      <div className='box-container'>
      <h1 className='main-title'>Users list</h1>
      <Link to={`/add`}><button className="add">ADD USER</button></Link>
  
      {items.length ? (
          
          <ItemList 
            items={items}
            handleDelete={handleDelete}
          />
        ) : (
          <p>User list is empty</p>
        )}
    </div>
      
    </section>
  )
}

export default UserPage;
