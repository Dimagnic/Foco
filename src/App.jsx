import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  const [isOn, setisOn] = useState(false)
  //const ison = false
  const changeVisible = () => {
    setisOn(!isOn)
  }


  return (
    
      <div className='Container'>
        <div className='Container-focus'> 
          <img className='foco' src={isOn ? "./img/focoEncendido.png" : "./img/focoApagado.png"} alt="" />
        </div>
        <br />
        <div className='Container-button'>
          <button className='button' onClick={changeVisible}><img className='interruptor' src={isOn ? "./img/off.png" : "./img/on.png"} alt="" /></button>
        </div>
      </div>
      
  
  )
}


export default App
