import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'



const ImageSlider = ({car}) => {

  return (
    <div>
   <Gallery>
    <Item 
      original={`/images/${car.make}/img-big1.png`}
      thumbnail={`/images/${car.make}/img-small1.png`}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={`/images/${car.make}/img-small1.png`} alt="1" />
      )}
    </Item>
    <Item
      original={`/images/${car.make}/img-big2.png`}
      thumbnail={`/images/${car.make}/img-small2.png`}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={`/images/${car.make}/img-small2.png`} alt="1" />
      )}
        </Item>
        <Item 
      original={`/images/${car.make}/img-big3.png`}
      thumbnail={`/images/${car.make}/img-small3.png`}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={`/images/${car.make}/img-small3.png`} alt="1" />
      )}
    </Item>
    <Item
      original={`/images/${car.make}/img-big4.png`}
      thumbnail={`/images/${car.make}/img-small4.png`}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={`/images/${car.make}/img-small4.png`} alt="1" />
      )}
        </Item> 
        <Item
      original={`/images/${car.make}/img-big5.png`}
      thumbnail={`/images/${car.make}/img-small5.png`}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={`/images/${car.make}/img-small5.png`} alt="1" />
      )}
        </Item> 


  </Gallery>
    <div className="container">
      <div className="images">
      {/* {
        car.images.map((image) => (
          <img className="sliderImage" src={image}  alt="car"/>
        ))
      } */}
       {/* <a href = {`/images/${car.make}/img-big1.png`}><img src={`/images/${car.make}/img-small1.png`} alt="img1"/></a>
       <a href = {`/images/${car.make}/img-big2.png`}><img src={`/images/${car.make}/img-small2.png`} alt="img1"/></a>
       <a href = {`/images/${car.make}/img-big3.png`}><img src={`/images/${car.make}/img-small3.png`} alt="img1"/></a>
       <a href = {`/images/${car.make}/img-big4.png`}><img src={`/images/${car.make}/img-small4.png`} alt="img1"/></a>
      {<img  src={`/images/${car.make}/img-small1.png`} className="slide-1" alt="img1"/>} */}
      {/* {<img  src={`/images/${car.make}/img-small2.png`} className="slide-2" alt="img2"/>}
      {<img  src={`/images/${car.make}/img-small3.png`} className="slide-3" alt="img3"/>}
      {<img  src={`/images/${car.make}/img-small4.png`} className="slide-1" alt="img1"/>} */}
     
      


      </div>
      </div>
      </div>
    
  );
};

export default ImageSlider;
