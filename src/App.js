
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';
import Layout from './components/Layout/Layout';
import About from './pages/about/aboutus';
import Country from './pages/country/index';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='about' element={<About/>
          } />

          <Route path='destination'>
            <Route index element={<h1>Destination</h1>}/>  
            {/* (bunlari sonradan component kimi elave etmek ){<h1>Destination</h1>} yerine {<Destination/>>} */}
            <Route path=":country" element={<Layout><Country/></Layout>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
