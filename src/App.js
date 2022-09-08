import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppearMajestic, BlackFriday, BuildingaVersatileWardrobe, Company, FiveAmazingCasualOutfits, GuideToMensBoots, Home, HowToCleanYourSneakers, HowToWearASuit, NineAccessories, PrivacyPolicy, Reads, SkinCareTips, TermsOfService } from './pages';
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
          <Route path='/guidetomensboots' element={<GuideToMensBoots/>} />
        </Routes>
      </Router>
    );
  }

  else {
    return (
        <Router> 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/company' element={<Company/>} />
            <Route path='/terms' element={<TermsOfService/>} />
            <Route path='/privacy' element={<PrivacyPolicy/>} />
          </Routes>
        </Router>
      );
  }
}

export default App;
