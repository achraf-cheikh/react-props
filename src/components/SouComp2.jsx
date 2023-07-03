import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./SouComp2.css";

const SouComp2 = ({ el, prod }) => {
  return (
    <div style={{ marginBottom: " 60px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.phot} />
        <Card.Body>
          <Card.Title>{el.title1}</Card.Title>
          <Card.Text>
            {el.title2}
            <br />
            {el.title3}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="mshatab">{el.ancprix}</ListGroup.Item>
          <ListGroup.Item>{el.promoprix}</ListGroup.Item>
        </ListGroup>
        <button
          style={{
            width: "120px",
            marginLeft: "80px",
            backgroundColor: "#8dc64d",
          }}
          onClick={() => prod()}
        >
          add (+)
        </button>
      </Card>
    </div>
  );
};

export default SouComp2;
