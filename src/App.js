
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';
import Layout from './components/Layout/Layout';
import About from './pages/about/aboutus';
import Country from './pages/destination/Destination';
import Homepage from './pages/homepage/Homepage';
import Destinations from './pages/destination/Destination';
import Italy from './pages/italy/Italy';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/destinations' element={<Destinations/>} />
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
