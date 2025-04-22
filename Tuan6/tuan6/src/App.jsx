import { useState, useReducer, useEffect } from 'react';
import './App.css';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const initialCounterState = { value: 0 };

function App() {
  const [count, setCount] = useState(0);
  const [counterState, dispatch] = useReducer(counterReducer, initialCounterState);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h2>Counter with useState</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Giảm (useState)
        </button>
        <button onClick={() => setCount((count) => count + 1)} style={{ marginLeft: '10px' }}>
          Tăng (useState)
        </button>
        <p>count is {count}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <br />

      <h2>Counter with useReducer</h2>
      <div className="card">
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Giảm (useReducer)
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })} style={{ marginLeft: '10px' }}>
          Tăng (useReducer)
        </button>
        <p>Giá trị hiện tại: {counterState.value}</p>
      </div>

      <br />

      <h2>Data from API</h2>
      <div className="api-data-section">
        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        {!loading && !error && (
          <ul>
            {posts.slice(0, 5).map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
        )}
        {!loading && !error && posts.length === 0 && <p>No data found.</p>}
      </div>
    </>
  );
}

export default App;