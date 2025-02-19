import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BaiPhepTinh() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)

  function ganA(e){
    setA(e.target.value);
  }

  function ganB(e){
    setB(e.target.value);
  }

  function tinhToan(e){
    var c=0;
    if(e.target.id == 1){
        c = parseInt(a) + parseInt(b);
        setResult(c);
    }
 
    alert(`Result:${c}`);
  }

  return (
    <>
      <h1>Bai 3: Bai phep tinh radio</h1>
      <input onChange={ganA} type="text"/><br />
      <input onChange={ganB} type="text" /><br />
        <input onClick={tinhToan} type="radio" name="gr" id="1" /> <span>+</span>
        <input onClick={tinhToan} type="radio" name="gr" id="2" /> <span>-</span>
        <input onClick={tinhToan} type="radio" name="gr" id="3" /> <span>*</span>
        <input onClick={tinhToan} type="radio" name="gr" id="4" /> <span>/</span>
      <br />
      <button onClick={tinhToan}>Tinh</button>
    </>
  )
}

export default BaiPhepTinh
