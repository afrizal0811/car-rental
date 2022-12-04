import React from "react";
import "./index.css";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Handlebutton from "../../components/registerlogic/Handlebutton";
import { useNavigate } from "react-router-dom";

const PublicRegister = (submitForm) => {
  const { handleChange, handleSubmit, errors, value, submitted } =
    Handlebutton(submitForm);

  const navigate = useNavigate();

  return (
    <section className="sign-section">
      <div className="sign-form">
        {/* {Object.keys(errors).length === 0 && submitted ? (
          <div id="signupcheck">Signed Up successfully!</div>
        ) : (
          <p id="alertup">Please fill in the form correctly!</p>
        )} */}
        {errors.status && (
          <div className="status-error">
            <Alert variant="danger" style={{ textAlign: "center" }}>
              {errors.status}
            </Alert>
          </div>
        )}
        <div className="square"></div>
        <h1>Sign Up</h1>
        <Form>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>{" "}
            {errors.fullname && (
              <span style={{ color: "red" }}>&#42;{errors.fullname}</span>
            )}
            <Form.Control
              type="name"
              placeholder="Nama Lengkap"
              value={value.fullname}
              name="fullname"
              onChange={handleChange}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>{" "}
            {errors.email && (
              <span style={{ color: "red" }}>&#42;{errors.email}</span>
            )}
            <Form.Control
              data-testid="form1"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              value={value.email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create Password</Form.Label>{" "}
            {errors.password1 && (
              <span style={{ color: "red" }}>&#42;{errors.password1}</span>
            )}
            <Form.Control
              type="password"
              placeholder="6+ Password"
              name="password1"
              value={value.password1}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>{" "}
            {errors.password2 && (
              <span style={{ color: "red" }}>&#42;{errors.password2}</span>
            )}
            <Form.Control
              type="password"
              placeholder="6+ Password"
              name="password2"
              value={value.password2}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            {!submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            )}
            {submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            )}
            {/* {Object.keys(errors).length === 0 && submitted ? (
              <div className="success">
                <Button
                  variant="primary"
                  type="submit"
                  className="signinBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  Sign In
                </Button>
              </div>
            ) : (
              <p id="null"></p>
            )} */}
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
