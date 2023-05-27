import profile from '../static/images/okamaster.png'

function Home() {
    return (
        <section className='container h-full m-auto relative section--home  active'>

            <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-5">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="mx-auto max-w-2xl pl-20">
                        <div class="text-left">
                            <p class="
                                m-6 text-lg leading-8 text-zinc-600 dark:text-zinc-100
                            ">
                                Hi, I'm <span className='text-amber-500'> Andrew Okamar. 👋🏾 </span>
                            </p>
                            <h1
                                class="
                                text-4xl font-bold tracking-tight text-white dark:text-zinc-100 sm:text-6xl">
                                Safeguarding the Digital Realm: Security Systems Architect.
                            </h1>
                        </div>
                        <a href="/#contact" class="mt-8 px-6 py-3 font-sourcecode text-blue-500 dark:text-cyan-400 inline-block border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20 focus:outline-none">
                            Get In Touch
                        </a>
                    </div>
                    <img
                        src={profile}
                        class="
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

        </section>
    )
}

export default Home;