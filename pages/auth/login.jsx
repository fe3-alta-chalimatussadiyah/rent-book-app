import Link from "next/link";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import style from "../../styles/Login.module.css";
import {faArrowRight} from "react-icons/fa";

function Login() {
  return (
    <Container fluid className="p-0 m-0 d-flex justify-content-center">
      <Form className={style.login}>
      <h4 className={style.judulLogin}>Login</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" autoComplete="off" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" autoComplete="off" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button className="btn-todo" variant="danger" >
        Submit
      </Button>
      <p>Don&apos;t have an account?  <Link href="/register"><a>Register <faArrowRight /></a></Link></p>
      </Form>
  </Container>
  )
}

export default Login;