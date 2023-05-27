import './SideNav.sass'


const nav = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Contact"
]

export const SideNav = ({ activeSection,handleNavChange}) => {
  return (
    <nav className="l-side-nav">
      <ul className="side-nav">
        {nav.map(item => 
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
