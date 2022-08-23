import React from 'react';
import "./App.css";
import Icon from './components/Icon';
import Text from './components/Text';
import Button from './components/Button';
import Precio from './components/Precio';
function App() {
  return ( <> 
  {/* <div className='page'>    */}
    <div className='contend'>

      <div className='contend1'>
        <Text></Text>
        <Icon></Icon>
      </div>

      <div className='contend2'>
      </div>

      <div className='contend3'>
        <Precio></Precio>
        <Button></Button>
      </div>
      
    </div>
    
  {/* </div>   */}
  </>
  )
}

export default App