import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { ContextAPI } from './utils/Context/ContextAPI';
import Footer from './components/Footer/Footer';



function App() {
  const location = useLocation();

  return (
    <ContextAPI>
      <div className="App ">
        <AnimatePresence presenceAffectsLayout>
          <Navbar />
          <Routes location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </AnimatePresence>

      </div>
    </ContextAPI>
  );
}

export default App;
