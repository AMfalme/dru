import { useState, useEffect } from "react";


import "./App.sass";
import "./index.css";

import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import Home from "./components/Home";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Certifications } from "./components/Certifications";
import { Experience } from "./components/Experience";

function App({ sections }) {
  const [currentSection, setCurrentSection] = useState(sections[0]);


  useEffect(() => {
    let canScroll = true,
      scrollController = null;
    const currentActive = document.getElementsByClassName('section--active')[0];
    currentActive.classList.add('section--next')
    setTimeout(() => {
      currentActive.classList.remove('section--active');
      document.getElementsByClassName(currentSection.section)[0].classList.remove('section--next');
      document.getElementsByClassName(currentSection.section)[0].classList.add('section--active')
    },
      100)

    onwheel = (event) => {
      setTimeout(() => {

        clearTimeout(scrollController);
        if (event.deltaY > 0 && canScroll) {
          currentSection.index < (sections.length - 1) ? setCurrentSection(sections[currentSection.index + 1]) : setCurrentSection(sections[0])
        } else if (event.deltaY < 0 && canScroll) {
          currentSection.index < 1 ? setCurrentSection(sections[sections.length - 1]) : setCurrentSection(sections[currentSection.index - 1])
        }
        canScroll = false;
      }, 400);
    }
  }, [currentSection,sections]);

  const handleSwitchComponent = (e) => {
    const currentActiveSection = sections.find(eachItem =>
      eachItem.section === e.currentTarget.dataset.id
    )
    setCurrentSection(currentActiveSection);


  }



  return (
    <div className="App w-full h-screen m-auto relative overflow-hidden bg-gray-900">
      <Header />
      <SideNav sections={sections} currentSection={currentSection} handleNavChange={handleSwitchComponent} />
      <Home />
      <About />
      <Portfolio />
   
      <Career />
      <Contact />
    </div>
  );
}

export default App;
