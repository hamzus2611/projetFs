import React from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import './NavBar.css';
const NavBar = ({ users }) => {
  return (
    <Navbar className="d-flex justify-content-between navstyle" >
      <Navbar.Brand href="#home"><img
          src="https://img.icons8.com/ios/452/student-male--v1.png"
          width= "50"  height= "50"
          style={{ borderRadius: "70%" }}
          alt="your profil"
          usemap="#exemple-map-1" />
          E-Etude</Navbar.Brand>
      {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          
        </Nav> */}
      <div style={{ display: "inline-flex" }} >
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </div>
      <Form className="d-inline-block " style={{justifyContent:'space-around'}} >
         {users.username} {users.lastname}
        <img
          src="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg"
          width= "50"  height= "50"
          style={{ borderRadius: "70%" }}
          alt="your profil"
          usemap="#exemple-map-1" />
      </Form>
    </Navbar>

  );
};

export default NavBar;
