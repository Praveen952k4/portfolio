import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praveen K </span>
            from <span className="purple"> Tenkasi, India.</span>
            <br />
            I am currently pursuing a B.Tech in Artificial Intelligence and Data science from Sri sai ram engineering college
            <br/>
            I'm currently learning UI Designs, Java full Stack and Machinle learning.
            <br />
            I'm expected to graduate from Sri sai ram engineering college, Chennai in 2026.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Never look back, always look forward!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
