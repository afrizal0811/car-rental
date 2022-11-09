import React from "react";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './index.css'
import Handlebutton from "../../components/registerlogic/Handlebutton";
import { useNavigate } from "react-router-dom";

const PublicRegister = (submitForm) => {
  
  const {handleChange, handleSubmit, errors, value, submitted} = Handlebutton(submitForm);

  const navigate = useNavigate();

  return (
    <section className="sign-section">
      <div className="sign-form">
      {Object.keys(errors).length === 0 && submitted ? 
      (<div id='signupcheck'>Signed Up successfully!</div>):
      (<p id="alertup">Please fill in the form correctly!</p>)}
        <div className="square"></div>
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="fullname">Name*</Form.Label>
            <Form.Control type="name" 
            placeholder="Nama Lengkap" 
            value={value.fullname} 
            name='fullname' 
            onChange={handleChange}/>
            {errors.fullname && <p className="error"><span><sup>*</sup>{errors.fullname}</span></p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" htmlFor='email'>
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              value={value.email} 
              name='email' 
              onChange={handleChange}
            />
            {errors.email && <p className="erroremail"><span><sup>*</sup>{errors.email}</span></p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="password">Create Password*</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="6+ Password" 
              name='password' 
              value={value.password} 
              onChange={handleChange}/>
            {errors.password && <p className="error"><span><sup>*</sup>{errors.password}</span></p>}
          </Form.Group>
          <div className="d-grid gap-2">
            {!submitted && <Button variant="primary" type="submit" className="btn-submit" onClick={handleSubmit}> 
              Sign Up
            </Button>}
            {submitted && <Button variant="primary" type="submit" className="btn-submit" onClick={handleSubmit}>
              Sign Up
            </Button>}
            {Object.keys(errors).length === 0 && submitted ? (<div className="success">
            <Button variant="primary" type="submit" className="btn-submit" onClick={(e)=> {
              e.preventDefault()
              navigate('/login')}}>
              Sign In
            </Button>
                </div>):(<p id="null"></p>)}
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="sign-link">
              Sign In here
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="sign-img" />
    </section>
  );
};

export default PublicRegister;
