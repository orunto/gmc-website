import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Company, Home, PrivacyPolicy, Reads, TermsOfService } from './pages';
import { FiveOutfitMistakes } from './pages';
import './App.css';

function App() {
  if (window.location.host.split(".")[0] == "reads") {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Reads/>} />
          <Route path='/fiveoutfitmistakes' element={<FiveOutfitMistakes/>} />
          <Route path='/' element={<Reads/>} />
          <Route path='/' element={<Reads/>} />
          <Route path='/' element={<Reads/>} />
          <Route path='/' element={<Reads/>} />
          <Route path='/' element={<Reads/>} />
          <Route path='/' element={<Reads/>} />
          <Route path='/' element={<Reads/>} />
          <Route path='/' element={<Reads/>} />
        </Routes>
      </Router>
    );
  }

  else if (window.location.host.split(".")[0] == "company") {
    return (
      <Router>
        <Company/>
      </Router>
    );
  }

  else if (window.location.host.split(".")[0] == "terms") {
    return (
      <Router>
        <TermsOfService/>
      </Router>
    );
  }

  else if (window.location.host.split(".")[0] == "privacy") {
    return (
      <Router>
        <PrivacyPolicy/>
      </Router>
    );
  }

  else {
    return (
        <Router> 
          <Home/>
        </Router>
      );
  }
}

export default App;
