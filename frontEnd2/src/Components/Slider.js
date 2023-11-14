import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: require("../assets/images/slider1.jpg") },
  { url: require("../assets/images/slider4.jpg") },
  { url: require("../assets/images/slider2.jpg") },
  { url: require("../assets/images/slider5.jpg") },
  { url: require("../assets/images/slider6.jpg") },
  { url: require("../assets/images/slider3.jpg") },
];


export default function Slider () {

    return (
    <div>
        <SimpleImageSlider
            width={`calc(100vw - 20px)`}
            height={`calc(100vh - 85px)`}
            images={images}
            showBullets={true}
            showNavs={true}
        />
    </div>
    );
};
