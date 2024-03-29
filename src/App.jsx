
import Navbar from "./Navbar"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from "./pages/AboutUs"
import Homepage from "./pages/HomePage"
function App() {
  

  return (
    <Router>
      <Navbar/>
    <div>
  
      <Routes>
        <Route path="/" element={<Homepage/>}/>

        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      </div>
      </Router>
      
  
  )
}

export default App
