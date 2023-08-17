import React from 'react'

export const Certifications = () => {
  const certificates = [
    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "Fortinet",
      url: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "Fortinet",
      url: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "Fortinet",
      url: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "Fortinet",
      url: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
  ]
  return (
    <div>
      <h2 className='
                  text-white 
                  text-center
                  text-2xl 
                  sm:text-3xl 
                  font-extrabold 
                  tracking-tight 
                  my-5
                  '>CERTIFICATIONS</h2>
      <div className="inline-flex items-center space-x-2 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        {certificates.map(certificate => (

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
              <img class="w-20 h-20 object-cover object-center rounded-full" src={certificate.img} alt="cuisine" />
              <h4 class="text-white text-2xl font-bold capitalize text-center">{certificate.name}</h4>
              <p class="text-white/50">55 members</p>
              <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">{certificate.name} <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
