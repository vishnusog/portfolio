import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navigation from './components/navigation'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
