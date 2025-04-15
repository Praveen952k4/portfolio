import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa"; 
function CodingProfiles() {
  const iconStyle = { color: "#ffffff", fontSize: "40px" }; 
  return (
    <Row className="justify-content-center pb-5">
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://leetcode.com/12a14praveen/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }} 
        >
          <SiLeetcode size={40}  style={iconStyle}/>
          <p className="" style={{ fontSize: "14px", textDecoration: "none" }}>
  click to view
</p>


        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.skillrack.com/faces/resume.xhtml?id=402909&key=ba3f6e5be0738807f9ecfb05d35691c4f832831d"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }} 
        >
          <FaLaptopCode size={40} style={iconStyle}/>
          <p className="" style={{ fontSize: "14px", textDecoration: "none" }}>
  click to view
</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://auth.geeksforgeeks.org/user/12a14pr6jee/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }} 
        >
          <SiGeeksforgeeks size={40} style={iconStyle}/>
          <p className="" style={{ fontSize: "14px", textDecoration: "none" }}>
  click to view
</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.codechef.com/users/praveen952k4"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }} 
        >
          <SiCodeforces size={40} style={iconStyle}/>
          <p className="" style={{ fontSize: "14px", textDecoration: "none" }}>
  click to view
</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.codechef.com/users/praveen952k4"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }} 
        >
          <SiCodechef size={40} style={iconStyle}/>
          <p className="" style={{ fontSize: "14px", textDecoration: "none" }}>
  click to view
</p>
        </a>
      </Col>
    </Row>
  );
}

export default CodingProfiles;
