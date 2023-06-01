import './_skills.sass';
import sophos from '../static/images/sophos.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Skills = () => {
  return (
    <section id='section--experience' className='container h-full m-auto absolute section--experience opacity-0  '>
       <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

      <Carousel 
        autoPlay={true} 
        infiniteLoop={true}
        stopOnHover={false}
        width={"300px"}
        className='m-auto'
      >
                <div>
                    <img src={sophos} alt='abc' className='rounded-3xl w-96' width={"300px"} height={"300px"}/>
                    <p className="legend">Sophos</p>
                </div>
                <div>
                    <img src={sophos} alt='abc' />
                    <p className="legend">Cisco</p>
                </div>
                <div>
                    <img src={sophos} alt='abc' />
                    <p className="legend">Fortinet</p>
                </div>
            </Carousel>
      </div>

    </section>
  )
}
