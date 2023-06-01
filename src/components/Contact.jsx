import React from 'react'

export const Contact = () => {
  return (
    <section id='section--contact' className='container h-full m-auto absolute opacity-0   section--contact'>

      <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-5 m-auto w-11/12'>
        <section className="dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="#" className="space-y-8">
              <div className='grid '>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full border-b border-white-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:border-white-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                    placeholder=" "
                  />
                  <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white-500 peer-focus:after:scale-x-100 peer-focus:after:border-white-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                    Email
                  </label>
                </div>
              
                <div class="relative h-11 w-full min-w-[200px]">
    <input
      class="peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
    Let us know how we can help you
    </label>
  </div></div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" className="peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>
      </div>
    </section>
  )
}
