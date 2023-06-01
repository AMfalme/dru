import { useState, useEffect } from "react";


import "./App.sass";
import "./index.css";

import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import Home from "./components/Home";
import { Story } from "./components/Story";
import { Skills } from "./components/Skills";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

function App({sections}) {
  const [currentSection, setCurrentSection] = useState('section--home');
  
  

  useEffect(() => {
    let canScroll = true,
      scrollController = null;
    onwheel = (event) => {

      if (event.deltaY < 0 && canScroll)
        {
          console.log('scrolling upwards');
          canScroll = false;

          clearTimeout(scrollController);
            scrollController = setTimeout(function(){
              canScroll = true;
            }, 1000);

            let newCurrentActive = document.getElementsByClassName('section--active')[0];
            console.log(newCurrentActive);
            if (newCurrentActive.previousElementSibling == null) {
            
          newCurrentActive.classList.add('section--next');
          setTimeout(() => {
          newCurrentActive.classList.remove('section--active')
          newCurrentActive.previousElementSibling.classList.add('section--active')},
          300)
          
        }
        }
      else if (event.deltaY > 0 && canScroll)

      // normal scroll downwards
        {
          canScroll = false;
          clearTimeout(scrollController);
          scrollController = setTimeout(function(){
            canScroll = true;
          }, 1000);

          // set up new currentSection
          // remove 'section--active' from the prev
          // add 'section--active' to the newCurrentSection


          let newCurrentActive = document.getElementsByClassName('section--active')[0];
          console.log(newCurrentActive.previousSibling);
          if (newCurrentActive.nextElementSibling == null) {
            newCurrentActive = document.getElementById('section--home');
          }
          newCurrentActive.classList.add('section--next');
          setTimeout(() => {
          newCurrentActive.classList.remove('section--active')
          newCurrentActive.nextElementSibling.classList.add('section--active')},
          300)
          
          
        
        }
  }
  }, []);
 
  const handleSwitchComponent = (e) => {
    const currentActiveSection = e.currentTarget.dataset.id;
    setCurrentSection(e.currentTarget.dataset.id);
    const currentActive = document.getElementsByClassName('section--active')[0];
    currentActive.classList.remove('section--active');
    document.getElementsByClassName(currentActiveSection)[0].classList.remove('section--next');
    document.getElementsByClassName(currentActiveSection)[0].classList.add('section--active');

    
  }


  
  return (
      <div className="App w-full h-screen m-auto relative overflow-hidden bg-gray-900">
        <Header />
        <SideNav sections={sections} currentSection={currentSection} handleNavChange={handleSwitchComponent}/>
        <Home />
        <About/>
        
        <Career/>
        <Skills />
        <Contact/>
      </div>
  );
}

export default App;
