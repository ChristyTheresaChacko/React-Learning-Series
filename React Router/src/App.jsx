import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/NavbarMain'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  
  
  return (
    <>
    
    <Router>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
       <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
    
    </Routes>
   
    </Router>
    
    </>
  )
}

export default App
