import React from "react";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
// import "./HomeStyles.css";  // Import the CSS styles

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

  return (
    <div className="page" style={{padding:"0px"}}>
      <div className="landing-content">
        <h2>Gallery App (DND)</h2>
        <p className="descrip">
          Step into our dynamic gallery where art comes alive through
          drag-and-drop interaction. Explore a vibrant collection of artworks,
          effortlessly rearranging and curating your visual experience. Our
          intuitive interface allows you to engage with art like never before,
          customizing your viewing journey.
        </p>
      </div>

      <div className="inputs">
        <h2>Log IN</h2>
        <div className="input">
          <input
            value={formData.userName}
            placeholder="Email"
            onChange={(e) => setFormData({ userName: e.target.value })}
            type="text"
          />
        </div>
        <div className="input">
          <input
            value={formData.password}
            placeholder="Password"
            onChange={(e) => setFormData({ password: e.target.value })}
            type="password"
          />
        </div>
        <div className="button">
          <button onClick={doLogin}>Log in</button>
        </div>
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
      </div>

    </div>


  );
};
