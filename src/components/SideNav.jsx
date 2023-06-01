import './SideNav.sass'



export const SideNav = ({sections, activeSection, handleNavChange}) => {
  return (
    <nav className="l-side-nav">
      <ul className="side-nav">
        {sections.map(item => 
            <li 
            className={activeSection === item ? "is-active": ""}
            data-id={`section--${item}`}
            onClick={handleNavChange}
            key={item}
          >
            <span>
              {item}
            </span>
          </li>
          
        )}
      </ul>
    </nav>
  )
}
