import React, {useState} from 'react'
import './_projects.sass';
import project1 from "../static/images/flex/about-winners.jpg";
import project2 from "../static/images/flex/work-alex-nowak.jpg";
import project3 from "../static/images/flex/work-metiew-smith.jpg";
import project4 from "../static/images/flex/work-victory.jpg";
import sophos from '../static/images/cert1.png'
import sopho from '../static/images/cert2.png'
import cert from '../static/images/cert3.png'


const projectImages = [sophos, sopho, cert, project2, project3, project4, project1, project2];
export const Projects = () => {
  //current image number in image list
  const [index, setIndex] = useState(0); 
 

  const [sliderImages, setSliderImages] = useState(projectImages.slice(index, 3))
  


  const handleClickPrev = () => {
    if (index === 0) return ;
    const imageDivs = document.getElementsByClassName('slider');    
    imageDivs[0].animate({ opacity : 0 }, 400);
    setSliderImages(projectImages.slice(index,index+3));
    setIndex(index - 1);
    // setXPosition(xPostion + width);
  }

  const handleClickNext= () => {
    if (index === projectImages.length -3) {
      setIndex(0)
    } else {
      setIndex(index + 1);
    }
    const imageDivs = document.getElementsByClassName('slider');    
    imageDivs[0].animate({ opacity : 0 }, 400);
    setSliderImages(projectImages.slice(index,index+3));
    

    
  }

  const imageClasses = (ind) => {
    if (ind === 0) return 'slider--item-left';
    if (ind === 1) return 'slider--item-center';
    if (ind === 2) return 'slider--item-right';
  }

  return (
    <div className="work">
      <h2 className='text-4xl font-extrabold tracking-tight text-white sm:text-7xl'>COMPLETED PROJECTS</h2>
      <div className="work--lockup">
        <ul className="slider">
          {
            sliderImages.map((img, ind) => (

              <li key={ind} className={`slider--item  ${imageClasses(ind)}`}>
                <a href="#0">
                  <div className="slider--item-image">
                    <img src={img} alt="Victory" />
                  </div>
                  <p className="slider--item-title slider--item-title text-base font-bold">Victory</p>
                  <p className="slider--item-description pt-8 text-sm text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </a>
              </li>

            ))
          }


        </ul>
        <div className="slider--prev" onClick={handleClickPrev}>
          <svg version="1.1" id="Layer_1" x="0px" y="0px"
            viewBox="0 0 150 118" >
            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
              <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
            </g>
          </svg>
        </div>
        <div className="slider--next" onClick={handleClickNext}>
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 150 118" >
            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Projects