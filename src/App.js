import './App.css';

import Header from "./components/Header"; 
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import References from "./components/References";
import Footer from "./components/Footer";
import { useState, useEffect} from 'react';



function App() {
   const [darkMode, setDarkMode] = useState(false);

   const [showReferences, setShowReferences] = useState(true);

   useEffect(() => {
     document.title = "My Online CV";
    }, []);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      
      <Header/>
      
      <button
       className="mode-btn"
       onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <button className="references-btn"
             onClick={()=> setShowReferences(!showReferences)}>
              {showReferences ? "Hide References" : "Show References" }
             </button>
      
      <button
       className="print-btn"
        onClick={() => window.print()}
       >
       Print CV
      </button>
    
      <main>
        <Profile title="Multimedia & Software Engineering Student | Aspiring Software Developer"/>
        <Education/>
        <Skills/>
        <Experience/>
        <Projects/>
        {showReferences && <References/>}
      </main>

       <Footer/>
    </div>
  );
}

export default App;
