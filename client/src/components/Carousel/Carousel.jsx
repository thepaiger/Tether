import { useEffect, useState } from "react"
import './Carousel.css'



const ControlledCarousel = ({children}) => {
  const [count, setCount] = useState(1)


  
  const changeCount = () => {
    if (count === 1) {
      setCount(2)
    } else if (count === 2) {
      setCount(3)
    } else if (count === 3) {
      setCount(1)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      changeCount()
    }, 2000)
  })

  return (
    <div className='carousel-display-div'>
      <div className="carousel-children">
        {children}
      </div>
      <div className='img1-div image-div'>
        <img src='/images/backgrounds/2021-porsche-taycan.jpeg' alt='taycan' className='img1' className='img'/>
      </div>
      <div className='img2-div image-div'>
        <img src='/images/backgrounds/lamborghini-terzo-millennio.jpg' alt='terzo' className='img2' className='img'/>
      </div>
      <div className='img3-div image-div'>
        <img src='/images/backgrounds/rimac-home-page.jpeg' alt='nevera' className='img3' className='img'/>
      </div>
    </div>
  )
}

export default ControlledCarousel

// /images/backgrounds/2021-porsche-taycan.jpeg
// /images/backgrounds/lamborghini-terzo-millennio.jpg
// /images/backgrounds/rimac-home-page.jpeg