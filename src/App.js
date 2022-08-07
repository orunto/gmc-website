import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppearMajestic, BlackFriday, BuildingaVersatileWardrobe, Company, FiveAmazingCasualOutfits, Home, HowToCleanYourSneakers, HowToWearASuit, NineAccessories, PrivacyPolicy, Reads, SkinCareTips, TermsOfService } from './pages';
import { FiveOutfitMistakes } from './pages';
import './App.css';

function App() {
  if (window.location.host.split(".")[0] == "reads") {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Reads/>} />
          <Route path='/fiveoutfitmistakes' element={<FiveOutfitMistakes/>} />
          <Route path='/nineaccessories' element={<NineAccessories/>} />
          <Route path='/appearmajestic' element={<AppearMajestic/>} />
          <Route path='/skincaretips' element={<SkinCareTips/>} />
          <Route path='/buildingaversatilewardrobe' element={<BuildingaVersatileWardrobe/>} />
          <Route path='/howtowearasuit' element={<HowToWearASuit/>} />
          <Route path='/howtocleanyoursneakers' element={<HowToCleanYourSneakers/>} />
          <Route path='/blackfriday' element={<BlackFriday/>} />
          <Route path='/fiveamazingcasualoutfits' element={<FiveAmazingCasualOutfits/>} />
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
