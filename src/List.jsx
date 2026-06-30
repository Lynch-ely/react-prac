import React from 'react'

function List({category = "Category", item = []}) {
   
    const ListItems = item.map(items => <li key={items.id}>{items.name}: &nbsp; <b>{items.calories}</b></li>);
  

  return (
    <div className='p-5'>
        <h3 className='text-2xl font-bold'>{category}</h3>
        <ul>{ListItems}</ul>
    </div>
  )
}

export default List
