import React from 'react'
import Items from './Items';
import FruitsVeggies from './FruitsVeggies';
import CounterButton from './CounterButton';
import Button from './Button';
import ColorPicker from './ColorPicker';
import Updater from './Updater';
import UpdateStateObject from './UpdateStateObject';

function App() {
  
  return (
    <>
      <div className='flex justify-center items-center min-h-screen'>
        <UpdateStateObject />
        {/* <Updater /> */}
        {/* <ColorPicker /> */}
        {/* <Button /> */}
        {/* <CounterButton /> */}
        {/* <FruitsVeggies /> */}
        {/* <Items /> */}
      </div>
    </>
  )
}

export default App;
