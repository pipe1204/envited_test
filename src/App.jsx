
import './App.css'
import Landing from './pages/landing/Landing'
import EnvitedEvent from './pages/event/EnvitedEvent'
import Colors from './pages/colors/Colors'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/events" element={<EnvitedEvent />}/>
        <Route path="/colors" element={<Colors />}/>
        
      </Routes>
    </div>
  )
}

export default App
