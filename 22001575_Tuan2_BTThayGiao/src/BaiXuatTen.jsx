import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BaiXuatTen() {
  const [result, setResult] = useState('')
  const [name, setName] = useState('')

  function ganTen(e){
    setName(e.target.value);
  }

  function handleClick(){
    alert(`Hello, ${name}!`);
  }
  return (
    <>
      <h1>Bai 1:In ten</h1>
      <input onChange={ganTen} type="text"/>
      <button onClick={handleClick}>Click</button>
      <br />
    </>
  )
}

export default BaiXuatTen
