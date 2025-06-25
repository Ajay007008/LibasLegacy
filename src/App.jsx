import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import MenPage from './components/MenPage';
import WomenPage from './components/WomenPage';
import WeddingPage from './components/WeddingPage';
import FabricPage from './components/FabricPage';
import AlterationPage from './components/AlterationPage';
import TuxedosPage from './components/TuxedosPage';







// Components for the Home Page
import Header2 from './components/header2';
import Banner1 from './components/banner1';
import Banner2 from './components/banner2';
import VideoPlayer from './components/videoPlayer';
import CustomCollections3 from './components/customeCollection3';
import AutoSlider from './components/autoSlider';
import Hero from './components/hero';
import Banner3 from './components/banner3';
import Services from './components/services';
import OurStory from './components/ourStory';
import CustomCollection from './components/customCollections';
import ContactInfo from './components/contactInfo';

function HomePage() {
  return (
    <>
      <Header2 />
      <Banner1 />
      <Banner2 />
      <VideoPlayer />
      <CustomCollections3 />
      <AutoSlider />
      <Hero />
      <Banner3 />
      <Services />
      <OurStory />
      <CustomCollection />
      <ContactInfo />
      {/* <CustomCollection2 /> */}
    </>
  );
}




function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Other Pages */}
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/alteration" element={<AlterationPage />} />
        <Route path="/tuxedos" element={<TuxedosPage />} />
          <Route path="/fabric" element={<FabricPage />} />
      </Routes>
    </Router>
  );
}

export default App;
