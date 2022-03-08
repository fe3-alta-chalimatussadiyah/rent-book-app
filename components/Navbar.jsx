import {Container, Nav, Navbar} from "react-bootstrap";
import Image from "next/image";
import navicon from "../assets/nav.png";
import Link from "next/link";
import { useRouter } from "next/router";
import {FaUserCircle} from "react-icons/fa"

export default function NavbarApp() {
  const router = useRouter();
  const { asPath } = router;

  function returnNavbar(){
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        return (
        <>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">  
            <Nav>
              <Link href="/login">
                <a className="m-3"><FaUserCircle style={{height: "30px", width: "30px"}}/></a>
              </Link>    
            </Nav>
          <style global jsx>
          {`
            .navbar {
              height: 100px;
              padding: 10px 100px;
              background-color: #FDE4DD;
            }   
          `}
        </style>
          </Navbar.Collapse>
        </>    
        )
    }   

    if (localStorage.getItem("token")) {
      return (  
      <>  
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
          <Nav>
          <Link href="/rents">
            <a className="m-3">My Rent</a>
            </Link>  
          </Nav>  
  
          <Nav>
          <Link href="/">
            <a className="m-3"
              onClick={() => {
                router.push("/login");
                localStorage.clear();
               }}
            >Sign Out</a>
          </Link>    
          </Nav>
          <style global jsx>
          {`
            .navbar {
              height: 100px;
              padding: 10px 100px;
              background-color: #FDE4DD;
            }   
          `}
        </style>
        </Navbar.Collapse>
        </>   
      )  
   }
  }
}

  return (
    <>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
          <Navbar.Brand href="#home" className="d-flex flex-row align-items-center">
          <Image
                src={navicon}
                alt="thumbnail"
                width={120}
                height={70}
              />
              <Link href="/">
              <a className="rent-book">RENT BOOK</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <>
          {returnNavbar()}
        <style global jsx>
          {`
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
        </>   
      </Container>
      </Navbar> 
    </>
  )
}