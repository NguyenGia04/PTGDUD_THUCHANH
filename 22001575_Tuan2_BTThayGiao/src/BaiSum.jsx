import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BaiSum() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)

  function ganA(e){
    setA(e.target.value);
  }

  function ganB(e){
    setB(e.target.value);
  }

  function sum(){
    var c = parseInt(a) + parseInt(b);
    setResult(c);
    alert(`Tong la:${c}`);
  }

  return (
    <>
      <h1>Bai 2: Sum</h1>
      <input onChange={ganA} type="text"/><br />
      <input onChange={ganB} type="text" /><br />
      <button onClick={sum}>Sum</button>
    </>
  )
}

export default BaiSum
