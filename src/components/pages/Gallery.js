import { AuthData } from "../../auth/AuthWrapper"

// import photos from "./photos"


import React, { useRef, useEffect } from 'react';
import Sortable from 'sortablejs';
import one from "../../assets/one.jpg"
import two from "../../assets/two.jpg"
import three from "../../assets/three.jpg"
import four from "../../assets/four.jpg"

const items = [one, two, three, four, one, three, four, two];

export const Gallery = () => {
     const { user } = AuthData();

  const sortableRef = useRef(null);

  useEffect(() => {
    const sortable = new Sortable(sortableRef.current, {
      animation: 150,
      ghostClass: 'sortable-ghost',
     
    });

    return () => {
      sortable.destroy();
      console.log(items)
    };
  }, []);

  return (
     
    <div className="gallery">
         <h2>Your Account</h2>
       <p>Username: {user.name}</p>
      <h2 style={{textAlign: "center", fontSize: "3rem"}}>Our gallery</h2>
       <div className="sortable-container">
           <ul ref={sortableRef} className="sortable-list">
      {items.map((photo, index) => (
        <li key={index} className="sortable-item">
          <img src={photo} alt="img" />
        </li>
      ))}
    </ul>
    </div>
    </div>
   
 
  );
};

export default Gallery;















// const Gallery = () => {
//   return (
//     <div>
//       Hello
//     </div>
//     );
// }
 
// export default Gallery;

