
const ImageSlider = ({car}) => {

  return (
    <div className="container">
      {/* {
        car.images.map((image) => (
          <img className="sliderImage" src={image}  alt="car"/>
        ))
      } */}
      {<img
        className="img1"
        src={`/images/${car.make}/img1.jpeg`}
        alt="car"
      />}

      </div>
    
  );
};

export default ImageSlider;
