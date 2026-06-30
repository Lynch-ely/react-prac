import React, { useState } from 'react'

function Updater() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }
    
    const resetHandler = () => {
        setCount(0);
    }

  return (
    <div className='inline-block'>
      <h1 className='text-2xl font-bold text-center'>Count: {count}</h1>
      <div className='space-x-3 mt-5'>
        <button className='bg-green-800 rounded-lg px-7 py-2 text-white font-semibold tracking-wide' onClick={incrementHandler}>Increment</button>
        <button className='bg-purple-800 rounded-lg px-7 py-2 text-white font-semibold tracking-wide' onClick={resetHandler}>Reset</button>
        <button className='bg-red-800 rounded-lg px-7 py-2 text-white font-semibold tracking-wide' onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  )
}

export default Updater
