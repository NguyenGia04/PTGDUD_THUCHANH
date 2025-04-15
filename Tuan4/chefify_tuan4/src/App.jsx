import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Recipe from './pages/Recipe'
import Home from './pages/Home'
import SearchNoResult from './pages/SearchNoResult'
import SearchResult from './pages/SearchResult'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/search"element={<SearchResult />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )

}

export default App
