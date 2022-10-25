import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quran from "../../../images/quran.jpg";
import FM from "../../../images/FacebookMarketing.webp";
import SEK from "../../../images/spokenenglishforkids.webp";
import ILTS from "../../../images/IELTS.jpg";

const BannerSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="pt-8">
      <Slider {...settings}>
        <div className="px-2">
          <img src={quran} alt=""></img>
        </div>
        <div className="px-2">
          <img src={FM} alt=""></img>
        </div>
        <div className="px-2">
          <img src={ILTS} alt=""></img>
        </div>
        <div className="px-2">
          <img src={SEK} alt=""></img>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
