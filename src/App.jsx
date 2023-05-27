import { useState } from "react";


import "./App.css";
import "./index.css";

import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import Home from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  
  const handleSwitchComponent = (e) => {
    const section = e.currentTarget.dataset.id  || ''
    setActiveSection(section);
    
    }


  const displaySection = () => {
    switch (activeSection){
      case 'section--Home':
        return <Home />;
      case 'section--About':
        return <About />
      case 'section--Skills':
        return <Skills />
      case 'section--Experience':
        return <Experience />
      case 'section--Contact':
        return <Contact />
            
      default:
        return <Home />
    }

  }
  
  return (
      <div className="App w-11/12 h-screen m-auto overflow-hidden">
        <Header />
        <SideNav activeSection={activeSection} handleNavChange={handleSwitchComponent}/>
        {displaySection()}
      </div>
  );
}

export default App;
