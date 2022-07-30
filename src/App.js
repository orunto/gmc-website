import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Reads } from './pages';
import './App.css';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reads" element={<Reads/>} />
      </Routes>
    </Router>
  );
}

export default App;
