import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './screens/home/home';
import PanoramicSlider from './components/gallery/gallery';
import { About } from './screens/about/about';
import { ContactUs } from './screens/contactUs/contactUs';
import { Menu } from './screens/menu/menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<About />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/menu' element={<Menu />}/>
      </Routes>
      
    </div>
  );
}

export default App;
