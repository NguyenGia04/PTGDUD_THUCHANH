import { useState } from 'react'

function CongTruUseState() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cong tru use state</h1>
      <div className="card">
        <span>Đếm:{count}</span><br />
        <button onClick={() => setCount((count) => count + 1)}>
           + 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
           -
        </button>
      </div>
    </>
  )
}

export default CongTruUseState
