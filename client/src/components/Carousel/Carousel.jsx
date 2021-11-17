import React from "react"
import { useState } from "react"

// const Carousel = () => {
//   const [carouselIndex, setCarouselIndex] = useState(1)

//   const BtnSlider = ({ direction, moveCarousel }) => {
//     return (
//       <button
//         onClick={moveCarousel}
//         className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
//       >
//         <img src={direction === "next" ? rightArrow : leftArrow} />
//       </button>
//     )
//   }

//   const nextSlide = () => {
//     if (carouselIndex !== dataSlider.length) {
//       setCarouselIndex(carouselIndex + 1)
//     } else if (carouselIndex === dataSlider.length) {
//       setCarouselIndex(1)
//     }
//   }

//   const prevSlide = () => {
//     if (carouselIndex !== 1) {
//       setCarouselIndex(carouselIndex - 1)
//     }
//     else if (carouselIndex === 1) {
//       setCarouselIndex(dataSlider.length)
//     }
//   }
//   return (
//     <div className="container-slider">
//       {slideIndex.map((obj, index) => {
//         return (
//           <div
//             key={obj.id}
//             className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>

//             <img
//               src={process.env.PUBLIC_URL + `/imageslogo.png`} />
//           </div>
//         )
//       })}
//       <BtnSlider moveSlide={nextSlide} direction={"next"} />
//       <BtnSlider moveSlide={prevSlide} direction={"prev"} />

//       <div className="container-dots">
//         {Array.from({ length: 5 }).map((item, index) => (
//           <div
//             onClick={() => moveDot(index + 1)}
//             className={carouselIndex === index + 1 ? "dot active" : "dot"}
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }

// import bootstrap, { Carousel } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="images/cars/rimac-home-page.jpeg"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="images/cars/vanda-dendrobium-006-1501514776.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="images/cars/nio_ep9_electric_supercar-2560x1440.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);

export default ControlledCarousel
