
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';
import Layout from './components/Layout/Layout';
import About from './pages/about/aboutus';
import Country from './pages/destination/Destination';
import Homepage from './pages/homepage/Homepage';
import Destinations from './pages/destination/Destination';
import Italy from './pages/italy/Italy';
import FAQ from './pages/FAQ/faq';
import BLOG from './pages/blog/Blog';
import CONTACT from './pages/contact/Contact';
import LOGIN from './pages/login/Login';
import FORGOT from './pages/forgot/Forgot';
import CREATE from './pages/create/create';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/FAQ' element={<FAQ/>} />
        <Route path='/destinations' element={<Destinations/>} />
        <Route path='/blog' element={<BLOG/>} />
        <Route path='/Contactus' element={<CONTACT/>} />
        <Route path='/login' element={<LOGIN/>} />
        <Route path='/forgot' element={<FORGOT/>} />
        <Route path='/create' element={<CREATE/>} />
          <Route path='/destinations'> 
            <Route path=":country" element={<Layout><Country/></Layout>}/>
          </Route>
          <Route path="/destinations/Italy" element={<Italy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
