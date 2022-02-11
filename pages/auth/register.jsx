import Link from "next/link";
import { useState, useEffect } from "react";
import {Container, Row, Col, Form, Button, Spinner} from "react-bootstrap";
import style from "../../styles/Register.module.css";
import {faArrowRight} from "react-icons/fa";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const REGIST_USER = gql`
mutation($name: String, $email: String, $password: String) {
  register(name: $name, email: $email, password: $password) {
    email
    message
  }
}
`;

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const router = useRouter();

  const [registUser, {data, loading, error}] = useMutation(REGIST_USER);

  useEffect(() => {
    if(data) {
    setShow(true);
    swal("Success!", ((data.register.message) + '\nyou can login now'), "success", {
      button: "close",
    });
    }
    console.log(data)
  }, [data]);

  useEffect(() => {
    if(error && error.graphQLErrors.length > 0) {
      setShow(true);
      swal("Oops!", (error.graphQLErrors[0].message), "error", {
        button: "close",
      })
    }
    console.log(error);
  }, [error]);

async function handleSubmit() {
    if (name.length === 0 && email.length === 0 && password.length === 0) {
      setShow(true);
      swal("Invalid!", "You must enter your name, email, and password!", "error", {
        button: "close",
      });
    }else if (name.length === 0) {
      setShow(true);
      swal("Invalid!", "You must enter your name!", "error", {
        button: "close",
      });
    } else if (email.length === 0) {
      setShow(true);
      swal("Invalid!", "You must enter your email!", "error", {
        button: "close",
      });
    } else if (password.length === 0) {
      setShow(true);
      swal("Invalid!", "You must enter your password!", "error", {
        button: "close",
      });
    } else {
      try {
        const _ = await registUser({
          variables: {
            name,
            email,
            password,
          },
        });
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } catch (err) {}
  }
}

  if (loading) {
    return <Spinner animation="border" variant="danger" style={{
      position: 'absolute', left: '50%', top: '50%'}}></Spinner>
  }

  return (
    <>
    <Container fluid className="p-0 m-0 d-flex justify-content-center">
      <Form className={style.register}>
      <h4 className={style.judulRegister}>Register</h4>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" autoComplete="off" required value={name} onChange={(e) => { setName(e.target.value); }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" autoComplete="off" required value={email} onChange={(e) => { setEmail(e.target.value); }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" autoComplete="off" required value={password} onChange={(e) => { setPassword(e.target.value); }} />
      </Form.Group>

      <Button variant="danger" onClick={() => handleSubmit()} >
        Submit
      </Button>
      <p><faArrowLeft />Back to<Link href="/login"><a> Login</a></Link></p>
      </Form>
  </Container>
  </>
  )
}