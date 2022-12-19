import { useState } from 'react'
import FocoEncendido from './img/focoEncendido.png'
import FocoApagado from './img/focoApagado.png'
import BotonEncendido from './img/off.png'
import BotonApagado from './img/on.png'
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
          <img className='foco' src={isOn ? FocoEncendido: FocoApagado} alt="" />
        </div>
        <br />
        <div className='Container-button'>
          <button className='button' onClick={changeVisible}><img className='interruptor' src={isOn ? BotonEncendido : BotonApagado} alt="" /></button>
        </div>
      </div>
      
  
  )
}


export default App
