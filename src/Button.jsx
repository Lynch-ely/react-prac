import React, { useState } from 'react'

function Button() {
    const [buttonText, setButtonText] = useState("Click Me");
    const [count, setCount] = useState(1);
    
    const handleClick = () => {
        const counter = count + 1;
        setCount(counter);

        if(count < 3){
            console.log(`Count: ${count}`);
            setButtonText(`Ouch! ${count}`);
        }else{
            setButtonText("Stop Clicking Me!");
        }
    };
    
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <button className='border-2 border-red-500 px-8 py-3 font-bold text-lg tracking-widest rounded-lg' onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default Button
