import React from "react";
import "./Nvbar.css";
import { Button, Form, NavDropdown } from "react-bootstrap";

const Nvbar = ({ Navobj }) => {
  return (
    <div className="NavContainer">
      <img
        style={{ width: "160px", height: "130px" }}
        src={Navobj.img}
        alt="logo"
      />

      <NavDropdown
        style={{
          lineHeight: "28px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#747474",
        }}
        id="nav-dropdown-dark-example"
        title={Navobj.liste1}
        menuVariant="dark"
      >
        <NavDropdown.Item href="#action/3.1">Epicerie Sucrée </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Crèmerie Et Surgelé
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Boissons</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Hygiène & Beauté</NavDropdown.Item>
      </NavDropdown>
      <div>
        <img
          style={{ width: "40px", height: "40px" }}
          src={Navobj.logo1}
          alt="logo account"
        />
        <h1>{Navobj.liste2}</h1>
      </div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <div>
        <img
          style={{ width: "50px", height: "50px" }}
          src={Navobj.logo2}
          alt="logo panier"
        />
        <h1>{Navobj.liste3}</h1>
      </div>
    </div>
  );
};

export default Nvbar;
