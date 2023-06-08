import './SideNav.sass'



export const SideNav = ({sections, currentSection, handleNavChange}) => {
  return (
    <nav className="l-side-nav">
      <ul className="side-nav">
        {sections.map(({index, section, nav })=> 
            <li 
            className={currentSection.section === section ? "is-active": ""}
            data-id={section}
            onClick={handleNavChange}
            key={index}
          >
            <span>
              {nav}
            </span>
          </li>
          
        )}
      </ul>
    </nav>
  )
}
