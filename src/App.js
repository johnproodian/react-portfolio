
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [pages] = useState(["about me", "portfolio"])
  

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Nav>
      
        <main>
          {currentPage === "about me" && (
            <About></About>
          )}
          { currentPage === "portfolio" && (
            <Portfolio></Portfolio>
          )}
          {/* { currentPage === "contact" && (
            <Contact></Contact>
          )} */}
          {/* { currentPage === "resume" && (
            <Resume></Resume>
          )} */}
        </main>
      
      <Footer></Footer>
    </div>
    
    

    
  );
}

export default App;
