import React from 'react'
const portfolioTabs = [
  'experience',
  'projects',
  'certifications'
]
const PortfolioTabs = ({ activeTab, handleSwitchTab }) => {
  return (

  <div className="bottom-4 absolute left-1/2 z-10 mt-5 flex max-w-max -translate-x-1/2 px-4">
    <div className=" inline-flex flex-auto rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {portfolioTabs.map(tab => (
              <div className="cursor-pointer group relative flex gap-x-2 rounded-lg p-4">
                <div className="mt-1 inline-flex  h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                </div>
                <div
                  data-id={tab}
                  onClick={handleSwitchTab}
                >
                  {/* <a href="#" className="font-semibold text-gray-900"/> */}
                    
                    <span className=""></span>
                  {/* </a> */}
                  <p className="mt-3 text-gray-600">{tab}</p>
                </div>
              </div>
            ))}


          </div>
        </div>

  )
}

export default PortfolioTabs