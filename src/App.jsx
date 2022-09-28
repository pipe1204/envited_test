
import './App.css'
import Landing from './pages/landing/Landing'
import EnvitedEvent from './pages/event/EnvitedEvent'
import { Routes, Route, Link } from "react-router-dom";
import Create from './pages/create/Create';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/events" element={<EnvitedEvent />}/>
        <Route path="/create" element={<Create />}/>
      </Routes>
    </div>
  )
}

export default App
