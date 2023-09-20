import React, { useRef, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Sortable from 'sortablejs';
import one from "./assets/one.jpg"
import two from "./assets/two.jpg"
import three from "./assets/three.jpg"
import four from "./assets/four.jpg"

const items = [one, two, three, four];

const AuthenticatedComponent = () => {
  const { user, isAuthenticated } = useAuth0();

  const sortableRef = useRef(null);

  useEffect(() => {
    if (sortableRef.current) {
      const sortable = new Sortable(sortableRef.current, {
        animation: 150,
        ghostClass: 'sortable-ghost',
      });

      return () => {
        sortable.destroy();
      };
    }
  }, [sortableRef]);

  return (
    isAuthenticated && (
      <div className="sortable-container">
        <p>Email: {user?.email}</p>
        <ul ref={sortableRef} className="sortable-list">
          {items.map((item, index) => (
            <li key={index} className="sortable-item">
              <img src={item} alt={`img${index}`} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default AuthenticatedComponent;
