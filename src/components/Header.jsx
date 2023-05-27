import logo from '../static/images/favicon-32x32.png'


export const Header = () => {
  return (
    <section className='container flex justify-between m-auto p-5'>
         <div >
                <img src={logo} className="rounded-2xl" alt="" />
            </div>
            <div>
                <menu className='header--nav-toggle'>
                    <span></span>
                </menu>
                <div className='theme-selector'>
                    <span className='dark activeTheme'></span>
                    <span className='light'></span>
                </div>
            </div>
    </section>
  )
}
