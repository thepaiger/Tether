import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './ImageSlider.css'
import { Gallery, Item } from 'react-photoswipe-gallery'


const ImageSlider = ({ car }) => {

  return (
    <div className="slider-div">
      <Gallery>
        <Item
          original={`/images/gallery-images/${car.model}/img-big1.png`}
          thumbnail={`/images/gallery-images/${car.model}/img-small1.png`}
          width="1200"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={`/images/gallery-images/${car.model}/img-small1.png`} alt="image1" />
          )}
        </Item>
        <Item
          original={`/images/gallery-images/${car.model}/img-big2.png`}
          thumbnail={`/images/gallery-images/${car.model}/img-small2.png`}
          width="1200"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={`/images/gallery-images/${car.model}/img-small2.png`} alt="image2" />
          )}
        </Item>
        <Item
          original={`/images/gallery-images/${car.model}/img-big3.png`}
          thumbnail={`/images/gallery-images/${car.model}/img-small3.png`}
          width="1200"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={`/images/gallery-images/${car.model}/img-small3.png`} alt="image3" />
          )}
        </Item>
        <Item
          original={`/images/gallery-images/${car.model}/img-big4.png`}
          thumbnail={`/images/gallery-images/${car.model}/img-small4.png`}
          width="1200"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={`/images/gallery-images/${car.model}/img-small4.png`} alt="image4" />
          )}
        </Item>
   
        <Item
          original={`/images/gallery-images/${car.model}/img-big5.png`}
          thumbnail={`/images/gallery-images/${car.model}/img-small5.png`}
          width="1200"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={`/images/gallery-images/${car.model}/img-small5.png`} alt="image5" />
          )}
        </Item>

        
      </Gallery>
    </div>
  );
};

export default ImageSlider;
