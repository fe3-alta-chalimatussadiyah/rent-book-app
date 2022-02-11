import Link from "next/link";
import { useState, useEffect } from "react";
import {Container, Row, Col, Form, Button, Spinner} from "react-bootstrap";
import style from "../../styles/Login.module.css";
import {faArrowRight} from "react-icons/fa";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
mutation($email: String, $password: String) {
  login(email: $email, password: $password) {
    token
    message
  }
}
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const router = useRouter();

  const [loginUser, {data, loading, error}] = useMutation(LOGIN_USER);

  useEffect(() => {
    if(data) {
    setShow(true);
    swal("Success!", (data.login.message), "success", {
      button: "close",
    });
    localStorage.setItem("token", data.login.token);
    }
  }, [data]);

  useEffect(() => {
    if(error && error.graphQLErrors.length > 0) {
      setShow(true);
      swal("Oops!", (error.graphQLErrors[0].message), "error", {
        button: "close",
      })
    }
  }, [error]);

async function handleSubmit() {
    if (email.length === 0 && password.length === 0) {
      setShow(true);
      swal("Invalid!", "You must enter your email and password!", "error", {
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
        const _ = await loginUser({
          variables: {
            email,
            password,
          },
        });

        setEmail('');
        setPassword('');
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } catch (err) {}
  }
}

  if (loading) {
    return <Spinner animation="border" variant="danger" style={{
      position: 'absolute', left: '50%', top: '50%'}}></Spinner>
  }

  // function returnAlert() {
  //   if(show) {
  //     return (
  //     swal("Success!", (data.login.message), "success", {
  //       button: "close",
  //       })
  //     );
  //   }
  // {returnAlert()}
  //   return <></>
  // }

  return (
    <>

    <Container fluid className="p-0 m-0 d-flex justify-content-center">
      <Form className={style.login}>
      <h4 className={style.judulLogin}>Login</h4>
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
      <p>Don&apos;t have an account?  <Link href="/register"><a>Register <faArrowRight /></a></Link></p>
      </Form>
  </Container>
  </>
  )
}