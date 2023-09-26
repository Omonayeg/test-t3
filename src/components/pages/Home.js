import React from "react";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
// import "./HomeStyles.css";  // Import the CSS styles

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import five from "../../assets/five.jpg";
import four from "../../assets/four.jpg";
import six from "../../assets/six.jpg";

    

export const Home = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer((formData, newItem) => ({ ...formData, ...newItem }), {
    userName: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password);
      navigate("/account");
    } catch (error) {
      setErrorMessage(error);
    }
  };
  const carouselSettings = {
     infinite: true,
     speed: 3000,
     slidesToShow: 5,
     slidesToScroll: 1,
     autoplay: true, // Enable autoplay
     autoplaySpeed: 3000,
     arrows: false,
   };
 
   const carouselSlides = [
     {
       id: 1,
       content: <img src={one}style={{maxWidth: "270px"}}  alt="img1" />,
     },
     {
       id: 2,
       content: <img src={two} style={{maxWidth: "270px"}} alt="Img2" />,
     },
     {
       id: 3,
       content: <img src={three} style={{maxWidth: "270px"}} alt="Img3" />,
     },
     {
       id: 4,
       content: <img src={four} style={{maxWidth: "270px"}} alt="Img4" />,
     },
     {
       id: 5,
       content: <img src={six} style={{maxWidth: "270px"}} alt="Img6" />,
     },
     {
       id: 6,
       content: <img src={five} style={{maxWidth: "270px"}} alt="Img5" />,
     },
   ];
  const renderSlides = () => {
     return carouselSlides.map((slide) => (
       <div key={slide.id} className="carousel-slide">
         {slide.content}
       </div>
     ));
   };

  return (
     <>
     <div className="carousel1">
        <Slider {...carouselSettings}>{renderSlides()}</Slider>
      </div>
    <div className="home">

      <div className="landing-content">
        <h2>My Gallary App </h2> 
        <p className="descrip">
          Step into our dynamic gallery where art comes alive through
          drag-and-drop interaction. Explore a vibrant collection of artworks,
          effortlessly rearranging and curating your visual experience. Our
          intuitive interface allows you to engage with art like never before,
          customizing your viewing journey.
        </p>
        <h5 className="footer">By Will Omonaye</h5>
      </div>

      <div className="inputs">
        <h2>Sign In</h2>
        <div className="input">
          <input
            value={formData.userName}
            placeholder="user@example.com"
            onChange={(e) => setFormData({ userName: e.target.value })}
            type="text"
          />
        </div>
        <div className="input">
          <input
            value={formData.password}
            placeholder="1Password"
            onChange={(e) => setFormData({ password: e.target.value })}
            type="password"
          />
        </div>
        <div className="btn">
          <button onClick={doLogin}>Log in</button>
        </div>
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
      </div>

    </div>
{/* <div className="carousel">
        <Slider {...carouselSettings}>{renderSlides()}</Slider>
      </div> */}
</>
  );
};
