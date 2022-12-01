import React from "react";
import "./index.css";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Handlebutton from "../../components/LoginLogic/handlebutton";
import { useLocation } from "react-router";
import queryString from "query-string";

const PublicLogin = (submit) => {
  const location = useLocation();
  const queries = queryString.parse(location.search);
  // console.log(JSON.stringify(queryString.parse(location.search)));
  console.log("haha")

  const { handleChange, handleSubmit, rentClick, errors, values, submitted } =
    Handlebutton(submit, queries);
  return (
    <section className="sign-section">
      <div className="sign-form">
        {/* {Object.keys(errors).length === 0 && submitted ? (
          <div className="success">
          <div className="signinsuccess">Signed In successfully!</div>
          </div>
          ) : (
            <p id="null"></p>
          )} */}
        {Object.keys(errors).length === 0 && submitted && (
          <div className="success">
            <div className="signinsuccess">Signed In successfully!</div>
          </div>
        )}
        <div className="square"></div>
        <h1>Welcome Back!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={handleChange}
              value={values.email}
              name="email"
            />
            {errors.email && (
              <p className="error">
                <span>
                  <sup>*</sup>
                  {errors.email}
                </span>
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="6+ Password"
              onChange={handleChange}
              value={values.password}
              name="password"
            />
            {errors.password && (
              <p className="error">
                <span>
                  <sup>*</sup>
                  {errors.password}
                </span>
              </p>
            )}
          </Form.Group>
          <div className="d-grid gap-2">
            {!submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            )}
            {submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            )}
            {Object.keys(errors).length === 0 && submitted ? (
              <div className="success">
                <Button
                  variant="primary"
                  className="Rentbtn"
                  onClick={rentClick}
                >
                  Rent a Car!
                </Button>
              </div>
            ) : (
              <p id="null"></p>
            )}
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="sign-link">
              Sign Up for free
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="sign-img" />
    </section>
  );
};

export default PublicLogin;
