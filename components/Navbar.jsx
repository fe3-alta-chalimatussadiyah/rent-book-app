import {Container, Nav, Navbar} from "react-bootstrap";
import Image from "next/image";
import navicon from "../assets/nav.png";
import Link from "next/link";

function NavbarApp() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
      <Navbar.Brand href="#home" className="d-flex flex-row align-items-center">
      <Image
            src={navicon}
            alt="thumbnail"
            width={120}
            height={70}
          />
          <Link href="/books">
          <a className="rent-book">RENT BOOK</a>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">  
        <Nav>
        <Link href="/rents">
          <a className="m-5">My Rent</a>
          </Link>  
        </Nav>  

        <Nav>
        <Link href="/">
          <a>Sign Out</a>
        </Link>    
        </Nav>
      </Navbar.Collapse>
      </Container>

      <style global jsx>
        {`
          .navbar {
            height: 100px;
            padding: 10px 20px;
            background-color: #FDE4DD;
          }
          .rent-book {
            font-size: 25px;
            vertical-align: middle !important;
            margin-right: 5px;
          }    
          .rent {
            line-height: normal;
          }    
        `}
      </style>
    </Navbar>
  )
}

export default NavbarApp;