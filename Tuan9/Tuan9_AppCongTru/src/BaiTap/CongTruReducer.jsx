
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case '+':
      return { count: state.count + 1 };
    case '-':
      return { count: state.count - 1 };
    default:
      throw new Error('Hành động không hợp lệ!');
  }
}

function CongTruReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Cong tru reducer</h1>
      <span>Đếm: {state.count}</span>
      <div>
        <button onClick={() => dispatch({ type: '+' })}>+</button>
        <button onClick={() => dispatch({ type: '-' })} style={{ margin: '0 10px' }}>-</button>
      </div>
    </div>
  );
}

export default CongTruReducer

