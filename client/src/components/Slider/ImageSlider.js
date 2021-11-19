import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './ImageSlider.css'
import { Gallery, Item } from 'react-photoswipe-gallery'


const ImageSlider = ({ car }) => {

  return (
    <div className="slider-div">
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
            <img ref={ref} onClick={open} src={`/images/${car.make}/img-small2.png`} alt="1" />
          )}
        </Item>
        {/* UPDATE ME!! */}
        <Item
          original={`/images/${car.make}/img-big4.png`}
          thumbnail={`/images/${car.make}/img-small4.png`}
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={`/images/${car.make}/img-small2.png`} alt="1" />
          )}
        </Item>
      </Gallery>
    </div>
  );
};

export default ImageSlider;
