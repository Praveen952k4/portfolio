import React from "react";
import Card from "react-bootstrap/Card";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body className="d-flex flex-column" style={{ height: "100%" }}>
        {/* Card Title */}
        <Card.Title>{props.title}</Card.Title>
        
        
        {/* Display Certificate Image if certLink is provided */}
        {props.certLink && (
          <img
            src={props.certLink}  // Use certLink to display the certificate image
            alt="Certificate"
            style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
