import React from 'react'
import List from './List'

function FruitsVeggies() {
  const fruits = [
    {id: 1, name: 'Banana', calories: 180},
    {id: 2, name: 'Apple', calories: 80},
    {id: 3, name: 'Orange', calories: 65},
    {id: 4, name: 'Watermelon', calories: 136},
    {id: 5, name: 'Mango', calories: 240},
  ];
  
  const veggies = [
    {id: 1, name: 'Onion', calories: 90},
    {id: 2, name: 'Garlic', calories: 50},
    {id: 3, name: 'Tomato', calories: 105},
    {id: 4, name: 'Eggplant', calories: 175},
    {id: 5, name: 'Carrot', calories: 232},
  ];

  return (
    <>
      <div className=''>
        {fruits.length > 0 && <List category='Fruits' item={fruits}/>}
        {veggies.length > 0 && <List category='Vegetables' item={veggies}/>}
      </div>
    </>
  )
}

export default FruitsVeggies
