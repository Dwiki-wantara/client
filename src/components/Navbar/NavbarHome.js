import React, { useState } from "react";
import AuthLogin from "../Auth/AuthLogin";
import AuthRegister from "../Auth/AuthRegister";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/dumbflix-logo.png";

export default function NavbarHome() {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const isRegister = (event) => { event.preventDefault(); setRegisterShow(false); setLoginShow(true); };
  const isLogin = (event) => { event.preventDefault(); setLoginShow(false); setRegisterShow(true); };

  return (
    <div> 
      <AuthLogin loginHere={isLogin} loginShow={loginShow} setLoginShow={setLoginShow}/>
      <AuthRegister registerHere={isRegister} registerShow={registerShow} setRegisterShow={setRegisterShow}/>

      <Navbar fixed="top" style={{ height: "8vh",backgroundColor:"rgb(10, 12, 0)" }}>
        <Container>
          <Nav>
            <Nav.Link>
              <Link to="/" className="fs-5" style={{textDecoration:"none", color:"white"}}>
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/tvshows" className="fs-5" style={{textDecoration:"none", color:"white"}}>
                TV Shows
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/movies" className="fs-5" style={{textDecoration:"none", color:"white"}}>
                Movies
              </Link>
            </Nav.Link>
          </Nav>
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: "380px" }}>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <button style={{margin:"10px", padding:"5px 20px", borderRadius:"10px",fontWeight:"bold"}} onClick={() => setRegisterShow(true)}>
              Register
            </button>
            <button style={{padding:"5px 25px", borderRadius:"10px",fontWeight:"bold",color:"white",backgroundColor:"red"}} onClick={() => setLoginShow(true)}>
              Login
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
