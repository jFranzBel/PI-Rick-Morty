import { useState } from "react";
import validation from "./validation.js";
import "./Form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: '', 
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h4>Rick and Morty</h4>
      <label htmlFor="email" className="form-label"> 
        Username:
      </label>
      <input
        type="text"
        name="email" 
        value={userData.email} 
        onChange={handleInputChange}
        className="form-input"
      />
      {errors.email && <p className="form-error">{errors.email}</p>}

      <label htmlFor="password" className="form-label">
        Password:
      </label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        className="form-innput"
      />
      {errors.password && <p className="form-error">{errors.password}</p>}

      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};

export default Form;