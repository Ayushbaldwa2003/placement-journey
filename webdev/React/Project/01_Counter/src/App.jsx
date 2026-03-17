import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  return (
    <>
      <h1>Value {counter}</h1>
      <button 
      onClick={()=>{
        if(counter < 10)
        setCounter(counter+1)
      }}
      >Add Value</button>
      <br/>
      <button onClick={()=>{
        if(counter > 0)
        setCounter(counter-1)
      }}>Decrease Value</button>
    </>
  )
}

export default App
