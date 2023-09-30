import React, { useState } from 'react'
import './Portfolio.css'
import PortfolioTabs from './PortfolioTabs'
import { Experience } from './Experience';
import { Skills } from "./Skills";
import { Projects } from "./Projects"
import { Certifications } from './Certifications';

export const Portfolio = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleSwitchTab = (e) => {
    console.log(e.currentTarget.dataset.id);
    setCurrentTab(e.currentTarget.dataset.id);
  }

  

  const displaySection = () => {
    switch (currentTab){
      case 'experience':
        return <Experience currentActiveTab={currentTab}/>;
      case 'projects':
        return <Projects index={0}/>;
      case 'certifications':
        return <Certifications />
            
      default:
        return <Experience currentActiveTab={currentTab}/>;
    }

  }
  return (
    <section id="section--portfolio"
      className='.local-bootstrap section--portfolio container h-full m-auto absolute section opacity-0'
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-5 m-auto w-11/12">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none">

          
          {displaySection()}
          <PortfolioTabs activeTab={currentTab} handleSwitchTab={handleSwitchTab}/>
        </div>
      </div></section>
  )
}
