import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import { useBoolean } from '@chakra-ui/react'
import {Routes, Route, useLocation} from "react-router-dom"

import {AnimatePresence} from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useBoolean(true);
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={darkMode === true ? "dark" : "light"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes location={location} key={location.pathname}>
          <Route path="Personal-Website" element={<Home darkMode={darkMode}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works darkMode={darkMode} />} />
        </Routes>
        <footer>
          <p>Ivan Matias © 2022</p>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
