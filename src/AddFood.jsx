import React, { use, useState } from 'react'

function AddFood() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);
    const [foodInput, setFoodInput] = useState('');

    const handleAdd = () => {
        console.log(foodInput);
        setFoodInput('');
        setFoods([...foods, foodInput]);
    }


  return (
    <div className='space-y-3'>
      <h2 className='font-bold text-2xl'>List of Food</h2>
      <ul className='list-decimal'>
        {foods.map((food, index) => <li key={index}>{food}</li>)}
      </ul>
      <div className='space-x-3'>
        <input className='border rounded-lg px-5 py-2' type="text" placeholder='Enter Food' 
        value={foodInput}
        onChange={(e) => setFoodInput(e.target.value)}/>
        <button className='border rounded-lg px-5 py-2' onClick={handleAdd}>ADD</button>
      </div>
    </div>
  )
}

export default AddFood
