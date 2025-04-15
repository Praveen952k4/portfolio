import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Coding Platforms</strong> Progress
        </h1>
      </Row>

      {/* LeetCode Card */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <h2 className="purple">LeetCode</h2>
        <img
          src="https://leetcard.jacoblin.cool/12a14praveen?ext=heatmap"
          alt="LeetCode Stats"
          style={{ width: "100%", maxWidth: "700px" }}
        />
      </Row>


    </div>
  );
}

export default Github;
