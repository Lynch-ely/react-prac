import React from 'react'
import { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }

  return (
    <div className='space-y-2 max-w-lg flex flex-col justify-center items-center p-5'>
        <h1 className='text-2xl font-bold'>Color Picker</h1>
        <div className={`rounded-lg max-w-3xs w-full h-50 border-2 border-slate-200 flex justify-center items-center`} style={{background: color}}>
            <h4 className='font-semibold text-lg'>Selected Color: {color}</h4>
        </div>
        <h4 className='font-semibold'>Select a Color: </h4>
        <input type="color" onChange={handleChangeColor} defaultValue={color}/>
    </div>
  )
}

export default ColorPicker
