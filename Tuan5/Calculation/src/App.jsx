import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [sum, setSum] = useState(0)
  const [value, setValue] = useState('')

  function handleSetA(e) {
    setA(e.target.value);
  }

  function handleSetB(e) {
    setB(e.target.value);
  }

  function handleChange(e) {
    setValue(e.target.id);
  }

  function handlesClick() {
    console.log(value);
    if(value == '1') {
      setSum(parseInt(a)+parseInt(b));
    }else if(value == '2'){
      setSum(parseInt(a)-parseInt(b));
    }else if(value == '3') {
      setSum(parseInt(a)*parseInt(b));
    }else if(value == '4'){
      setSum(parseInt(a)/parseInt(b));
    }
  }

  return (
    <>
      <input placeholder = 'input a' onChange ={handleSetA} type="text" /> <br />
      <input placeholder = 'input b' onChange ={handleSetB} type="text" /> <br />
      <input id='1' onChange={handleChange} type="Radio" name='group'/><span>+</span>
      <input id='2' onChange={handleChange} type="Radio" name='group'/><span>-</span>
      <input id='3' onChange={handleChange} type="Radio" name='group'/><span>*</span>
      <input id='4' onChange={handleChange} type="Radio" name='group'/><span>/</span>
      <br />
      <br />
      <button onClick={handlesClick}>Calculation</button> <br />
      <span>Result is: {sum}</span>
    </>
  )
}

export default App
