import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Company, Home, PrivacyPolicy, Reads, TermsOfService } from './pages';
import './App.css';

function App() {
  if (window.location.host.split(".")[0] == "reads") {
    return (
      <Router>
        <Reads/>
      </Router>
    );
  }

  else {
  return (
      <Router> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsofservice" element={<TermsOfService/>} />
          <Route path="/company" element={<Company/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
