import React, { useRef, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard")
    } catch {
      setError("giriş başarısız");
    }
    setLoading(false);
  }

  return (
    <Container
      className="align-items justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="w-100"
        style={{ maxWidth: "400px", marginLeft: "350px" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Giriş Yap</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Giriş yap
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Hesap Oluşturun? <Link to="/sign-up">Sign Up</Link>
      </div>
    </Container>
  );
};

export default Login;
