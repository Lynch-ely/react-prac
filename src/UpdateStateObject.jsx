import React, { useState } from 'react'

function UpdateStateObject() {
    const [car, setCar] = useState({year: 2025, make: "Ford", model: "Mustang"});

    /*const handleYearChange = (e) => {
        const newYear = e.target.value;
        console.log(newYear);
    }*/

    const handleYearChange = (e) => {
        setCar(c => ({...c, year: e.target.value})) //...c spread the previous value
    }
    const handleMakeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }
    const handleModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }


  return (
    <div className='space-y-3'>
      <h1>Your favorite car is: {car.year} {car.make} {car.model}</h1>
      <div className='flex flex-col space-y-3'>
        <input type="number" onChange={handleYearChange} value={car.year}  className='border-2 rounded-lg px-3 py-1'/>
        <input type="text" onChange={handleMakeChange} value={car.make}  className='border-2 rounded-lg px-3 py-1'/>
        <input type="text" onChange={handleModelChange} value={car.model}  className='border-2 rounded-lg px-3 py-1'/>
      </div>
    </div>
  )
}

export default UpdateStateObject
