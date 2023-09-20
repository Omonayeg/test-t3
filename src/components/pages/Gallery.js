import { AuthData } from "../../auth/AuthWrapper";

// import photos from "./photos"

import React, { useRef, useEffect } from "react";
import Sortable from "sortablejs";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";
import five from "../../assets/five.jpg";
import six from "../../assets/six.jpg";
import seven from "../../assets/seven.jpg";
import eight from "../../assets/eight.jpg";
import nine from "../../assets/nine.jpg";
import ten from "../../assets/ten.jpg";
import eleven from "../../assets/eleven.jpg";
import { Link } from "react-router-dom";

const items = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  one,
];

export const Gallery = () => {
  const { user } = AuthData();

  const sortableRef = useRef(null);

  useEffect(() => {
    const sortable = new Sortable(sortableRef.current, {
      animation: 150,
      ghostClass: "sortable-ghost",
    });

    return () => {
      sortable.destroy();
      console.log(items);
    };
  }, []);

  return (
    <div className="gallery">
      <div className="account-details">
        <h4>Your Account</h4>
        <p>Username: {user.name}</p>
      </div>

      <h2> Gallery Grid</h2>
      <div className="sortable-container">
        <ul ref={sortableRef} className="sortable-list">
          {items.map((photo, index) => (
            <li key={index} className="sortable-item">
              <img src={photo} alt="img" />
              {/* {photo.id(0) && <h4>Nature</h4>} */}
              <h4>Love</h4>
            </li>
          ))}
        </ul>
      </div>
      <div className="foot">
        <Link to={"github.com"}><img src="" alt="" /></Link>
      <h5>Developed by Will Omonaye, HNGx 2023.</h5>
      </div>
    </div>
  );
};

export default Gallery;

