import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
