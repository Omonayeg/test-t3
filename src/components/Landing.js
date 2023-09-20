// // import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import one from "../assets/one.jpg"
// import two from "../assets/two.jpg"
// import three from "../assets/three.jpg"
// import five from "../assets/five.jpg"
// import four from "../assets/four.jpg"
// import six from "../assets/six.jpg"

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';





// const LandingPage = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   const openModal = () => {
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   const toggleDarkMode = () => {
// //     setIsDarkMode(prevMode => !prevMode);
// //   };


//   const carouselSettings = {
    
//     infinite: true,
//     speed: 400,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 1200, 
//     arrows: false,
//   };

//   const carouselSlides = [
//     {
//         id: 1,
//         content: <img src={one} alt="img1" />,
//       },
//       {
//         id: 2,
//         content: <img src={two} alt="Img2" />,
//       },
//       {
//         id: 3,
//         content: <img src={three} alt="Img3" />,
//       },
//       {
//         id: 4,
//         content: <img src={four} alt="Img4" />,
//       },
//       {
//         id: 5,
//         content: <img src={six} alt="Img6" />,
//       },  {
//         id: 6,
//         content: <img src={five} alt="Img5" />,
//       },

//     ];
  

//   const renderSlides = () => {
//     return carouselSlides.map(slide => (
//       <div key={slide.id} className="carousel-slide">
//         {slide.content}
//       </div>
//     ));
//   };
//   return (
    // <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    //     <div className="container">
    //   <div className="header">
    //     <div className="user-icon">
    //       <img
    //         src="user-icon.png"
    //         alt="User Icon"
    //         id="userIcon"
    //         onClick={openModal}
    //       />
    //     </div>
    //     <button className="toggle-button" onClick={toggleDarkMode}>
    //       Toggle Mode
    //     </button>
    //   </div>

    

      // <div className="landing-content">
      //       <h2>Gallery App (DND)</h2>
      //       <p className="descrip">
      //       Step into our dynamic gallery where art comes alive through drag-and-drop interaction. 
      //       Explore a vibrant collection of artworks, effortlessly rearranging and curating your visual experience. 
      //       Our intuitive interface allows you to engage with art like never before, customizing your viewing journey.
             
      //       </p>
      //       <div className="carousel">
      //       <Slider {...carouselSettings}>{renderSlides()}</Slider>
      // </div>
      
      // <h6>Developed by Will Omonaye</h6>
      //   </div>



     

   
    //   </div>
//     // </div>
//   );
// };

// export default LandingPage;
   /* {isModalOpen && (
        <div id="modal" className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="form-container">
              <h2>Login or Sign Up</h2>
              <form action='/'>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      )} */

      const Login = () => {
        const { loginWithRedirect } = useAuth0();
        return (  
          <div>
            
      <div className="landing-content">
            <h2>Gallery App (DND)</h2>
            <p className="descrip">
            Step into our dynamic gallery where art comes alive through drag-and-drop interaction. 
            Explore a vibrant collection of artworks, effortlessly rearranging and curating your visual experience. 
            Our intuitive interface allows you to engage with art like never before, customizing your viewing journey.
             
            </p>
            {/* <div className="carousel">
            <Slider {...carouselSettings}>{renderSlides()}</Slider>
      </div> */}
      
      <h6>Developed by Will Omonaye</h6>
        </div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
          </div>
        );
      }
       
      export default Login;