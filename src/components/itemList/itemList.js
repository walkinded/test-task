import React from 'react'
import Item from '../item/item'
import './itemList.css'

const ItemList = ({ items, handleDelete }) => {
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
          {items.map((item) => (
            <Item 
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ItemList
