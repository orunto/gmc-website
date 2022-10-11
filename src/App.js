import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppearMajestic, BlackFriday, BuildingaVersatileWardrobe, ClothingItemsToElevateYourWardrobe, Community, Company, FiveAmazingCasualOutfits, GuideOnBusinessCasuals, GuideToMensBoots, Home, HowToCareForYourClothes, HowToCleanYourSneakers, HowToWearASuit, MobileApp, NineAccessories, PrivacyPolicy, Reads, SkinCare, SkinCareProducts, SkinCareTips, StarterPacks, Support, TermsOfService } from './pages';
import { FiveOutfitMistakes } from './pages';
import './App.css';

function App() {
  if (window.location.host.split(".")[0] === "reads") {
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
          <Route path='/howtocareforyourclothes' element={<HowToCareForYourClothes/>} />
          <Route path='/guideonbusinesscasuals' element={<GuideOnBusinessCasuals/>} />
          <Route path='/skincareproducts' element={<SkinCareProducts/>} />
          <Route path='/clothingitemstoelevateyourwardrobe' element={<ClothingItemsToElevateYourWardrobe/>} />
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
            <Route path='/starterpacks' element={<StarterPacks/>} />
            <Route path='/community' element={<Community/>} />
            <Route path='/skincare' element={<SkinCare/>} />
            <Route path='/support' element={<Support/>} />
            <Route path='/mobileapp' element={<MobileApp/>} />
          </Routes>
        </Router>
      );
  }
}

export default App;
