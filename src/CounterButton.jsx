import React from 'react'

function CounterButton() {

    // const handleClick = (name) => console.log(`Ouch! ${name}`);
    let counter = 0;

    const handleClick = () => {
        counter++;

        console.log(`Count: ${counter}`);
    }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <button className='border-2 border-red-500 px-8 py-3 font-bold text-lg tracking-widest rounded-lg' onClick={handleClick}>CLICK ME</button>
    </div>
  )
}

export default CounterButton
