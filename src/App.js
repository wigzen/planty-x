import './App.css'
import Mockman from 'mockman-js'
import { Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
