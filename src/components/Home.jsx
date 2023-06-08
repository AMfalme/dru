import profile from '../static/images/okamaster.png'

import { SlowText } from './SlowText';
function Home() {
    return (
        <section id='section--home' className='section--home container h-full m-auto absolute section opacity-0   section--active'>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-5 m-auto w-11/12">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="mx-auto max-w-2xl pl-20 pt-12">
                        <div className="text-left">
                            <p className="
                                m-6 text-lg leading-8 text-zinc-600 dark:text-zinc-100
                            ">
                                Hi, I'm <span className='text-amber-500'> Andrew Okamar. 👋🏾 </span>
                            </p>
                            <h1
                                className="
                                text-4xl font-bold tracking-tight text-white dark:text-zinc-100 sm:text-6xl">
                                Safeguarding the Digital Realm: Security Systems Architect.
                            </h1>
                        </div>
                        <a href="/#contact" className="
                                                mt-8 
                                                px-6 
                                                py-3 
                                                text-blue-500 
                                                dark:text-cyan-400 
                                                inline-block 
                                                border-2 
                                                border-blue-500 
                                                dark:border-cyan-400 
                                                rounded-md 
                                                transition 
                                                hover:bg-blue-500 
                                                dark:hover:bg-cyan-400 
                                                hover:bg-opacity-20 
                                                dark:hover:bg-opacity-20 
                                                focus:bg-blue-500 
                                                dark:focus:bg-cyan-400 
                                                focus:bg-opacity-20 
                                                dark:focus:bg-opacity-20 
                                                focus:outline-none
                                                flex w-52
                                                ">
                            <span> Get In Touch </span>

                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className='m-auto mt-1'
                            >
                                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                            </svg>
                        </a>
                    </div>
                    <img
                        src={profile}
                        className="
                        sm:w-[57rem]
                        md:-ml-4
                        lg:-ml-0
                        h-10/12
                    "

                        height="445"
                        alt="Sample"
                    />
                </div>
            </div>
        <div className='w-full fixed bottom-0 h-20 bg-black opacity-25'>

        </div>
        </section>
    )
}

export default Home;