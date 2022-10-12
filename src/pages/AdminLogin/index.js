import React from "react";
import "./index.css";
import AdminImage from "../../assets/image/admin-login.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const AdminLogin = () => {
  return (
    <section className="admin-section">
      <img src={AdminImage} alt="admin-img" className="admin-img" />
      <div className="admin-form">
        <div className="square"></div>
        <h1>Welcome, Admin BCR</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="6+ Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className="btn-submit">
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default AdminLogin;
