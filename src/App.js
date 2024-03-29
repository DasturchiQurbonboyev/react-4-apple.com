// import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import Ipad from './components/ipad/Ipad';
import Iphone from './components/iphone/Iphone';
import Mac from './components/mac/Mac';
import Navbar from './components/navbar/Navbar';
import Store from './components/store/Store';
import Vision from './components/vision/Vision';
import Watch from './components/watch/Watch';

import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/hero' element={<Hero />} />
        <Route path='/store' element={<Store />} />
        <Route path='/mac' element={<Mac />} />
        <Route path='/iphone' element={<Iphone />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
