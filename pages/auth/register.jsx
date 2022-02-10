import Link from "next/link";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import style from "../../styles/Register.module.css";
import {faArrowLeft} from "react-icons/fa";

function Register() {
  return (
    <Container fluid className="p-0 m-0 d-flex justify-content-center">
      <Form className={style.register}>
      <h4 className={style.judulRegister}>Register</h4>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" autoComplete="off" required />
      </Form.Group>

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
      <p><Link href="/"><a><faArrowLeft /> Back to Login</a></Link></p>
      </Form>
  </Container>
  )
}

export default Register;