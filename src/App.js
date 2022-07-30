import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, PrivacyPolicy, Reads } from './pages';
import './App.css';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reads" element={<Reads/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
      </Routes>
    </Router>
  );
}

export default App;
