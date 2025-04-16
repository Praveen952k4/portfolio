import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import eye from "../../Assets/Projects/eye.jpg";
import paddle from "../../Assets/Projects/OIP.jpeg";
import objecttrack from "../../Assets/Projects/AIRO.jpg";
import fraud_Detection from "../../Assets/Projects/AI document.png";
import ccfraud from "../../Assets/Projects/foodtech1.webp";
import ARfood from "../../Assets/Projects/ARfood.jpg";
import nptel1 from "../../Assets/Projects/nptel1.png";
import nptel2 from "../../Assets/Projects/nptel2.png";
import nptel3 from "../../Assets/Projects/nptel3.png";
import nptel4 from "../../Assets/Projects/nptel4.png";
import mumbai from "../../Assets/Projects/mumai.jpg";
import APPAIN from "../../Assets/Projects/APPIAN.jpg";
import Resource from "../../Assets/Projects/resource.jpg";
import adhi from "../../Assets/Projects/adhi.jpg";
import adhi2 from "../../Assets/Projects/adhi2.jpg";
import MTU from "../../Assets/Projects/MTU.jpg";
import aids from "../../Assets/Projects/aids.jpg";
import csbs from "../../Assets/Projects/csbs.jpg";
import aidsor from "../../Assets/Projects/aidsor.jpg";
import sit from "../../Assets/Projects/sit.jpg";
import ieeeor from "../../Assets/Projects/ieeeor.jpg";
import is from "../../Assets/Projects/is.jpg";
import intern from "../../Assets/Projects/intern.jpg";
import project21 from "../../Assets/Projects/21.jpg";
import project22 from "../../Assets/Projects/22.jpg";
import project23 from "../../Assets/Projects/23.jpg";
import project24 from "../../Assets/Projects/24.jpg";
import project25 from "../../Assets/Projects/25.jpg";
import project26 from "../../Assets/Projects/26.jpg";
import project27 from "../../Assets/Projects/27.jpg";
import project31 from "../../Assets/Projects/31.jpg";
import project32 from "../../Assets/Projects/32.jpg";
import project33 from "../../Assets/Projects/33.jpg";
import project34 from "../../Assets/Projects/34.jpg";
import project35 from "../../Assets/Projects/35.jpg";
import unstop1 from "../../Assets/Projects/unstop1.jpg";
import unstop2 from "../../Assets/Projects/unstop2.jpg";
import unstop3 from "../../Assets/Projects/unstop3.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "space-evenly", // This ensures that cards are spaced evenly
            paddingBottom: "10px",
            flexWrap: "wrap", // Allow wrapping of columns if the screen size is small
          }}
        >
          {/* Project Cards Section */}
          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={fraud_Detection}
              isBlog={false}
              title="Intelligent Customer Support Automation for Financial Institutions"
              description="An AI-driven web platform that streamlines customer support through real-time call transcription, instant data retrieval, intelligent call routing, automated document classification, fraud detection, and follow-up via email and WhatsApp — enhancing both efficiency and customer satisfaction."
              ghLink="https://github.com/Praveen952k4/APPIAN"
            />
          </Col>

            <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ARfood}
              isBlog={false}
              title="AR Automated Dinning"
              description="AR Dining (Augmented Reality Dining) refers to the use of augmented reality technology to enhance the dining experience. Through the integration of digital elements with the physical environment, AR dining creates an immersive, interactive, and innovative dining experience."
              ghLink=""
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={objecttrack}
              isBlog={false}
              title="AIRO 4.0 Websites"
              description="Built the website for Sri Sai Ram Engineering College’s symposium, making it easy to manage and engage attendees. I also organize and run events for AIRO 4.0, ensuring everything ran smoothly. It was a great chance to sharpen my web dev and event coordination skills."
              ghLink="https://github.com/Praveen952k4/AIRO2K24"
              viewLink="https://airo2k24.github.io/AIRO2K24/"
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Eye-diseases Prediction"
              description="Eye Diseases Prediction is an AI-based system that analyzes retinal or eye images to detect conditions like diabetic retinopathy, glaucoma, and cataracts. Using machine learning and deep learning models, it enables early diagnosis and supports ophthalmologists in making faster, more accurate decisions."
              ghLink="https://github.com/Praveen952k4/Eye-Diseases"
              viewLink="https://colab.research.google.com/drive/1cGRFLKQns1Z4YkoTESZvFpVNHyboyyWr?usp=sharing"
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ccfraud}
              isBlog={false}
              title="MERN Stack Project for Food"
              description="MERN Stack Food App is a full-stack web application built using MongoDB, Express.js, React.js, and Node.js to manage and deliver food orders efficiently. It features dynamic menus, user authentication, cart management, and real-time order tracking, offering a seamless experience for both customers and administrators."
              ghLink=""
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={paddle}
              isBlog={false}
              title="Event-wise Tourism"
              description="Local events are basically community get-togethers like festivals, concerts, or fairs. They're all about bringing people together to have fun and celebrate local vibes. These events also help boost tourism and support local businesses. It's a great way to connect and enjoy what the area has to offer."
              ghLink=""
            />
          </Col>

        </Row>

        {/* Certificates Section */}
        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've received.
        </p>
        <Row
          style={{
            justifyContent: "space-evenly", // This ensures that cards are spaced evenly
            paddingBottom: "10px",
            flexWrap: "wrap", // Allow wrapping of columns if the screen size is small
          }}
        >
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
          NP<strong className="purple">TEL</strong>
        </h1>
          {/* Certificate Cards Section */}
          <Col md={4} sm={6} xs={12} className="project-card">
            <CertificateCard
              title="Data Analytics and Decision Making III"
              certLink={nptel1}
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <CertificateCard
              title="Data Science for Engineers"
              certLink={nptel2}
            />
          </Col>
          <Col md={4} sm={6} xs={12} className="project-card">
            <CertificateCard
              title="Design and Implementation of Human Interface"
              certLink={nptel3}
            />
          </Col>
          <Col md={4} sm={6} xs={12} className="project-card">
            <CertificateCard
              title="Python for Data Science"
              certLink={nptel4}
            />
          </Col>
          <h1 className="project-heading" style={{ marginTop: "50px" }}>
          Hack<strong className="purple">athon</strong>
        </h1>
          <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Appian AI challenge 3rd Prize"
                certLink={APPAIN}
                
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Technovate 2.0 at Mumbai"
                certLink={mumbai}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="MTU Hackathon"
                certLink={MTU}
                
              />
            </Col>
            <h1 className="project-heading" style={{ marginTop: "50px" }}>
          Resource<strong className="purple">  Person</strong>
        </h1>
        <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Successfully conducted a Web Development Workshop for 2nd-year students, focusing on front-end to build dynamic applications"
                certLink={Resource}
              />
            </Col>
            <h1 className="project-heading" style={{ marginTop: "50px" }}>
            Intern<strong className="purple">ship</strong>
        </h1>
        <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="VEI Technologies, Chennai"
                certLink={intern}
              />
            </Col>
            <h1 className="project-heading" style={{ marginTop: "50px" }}>
        Project<strong className="purple">  Presentation</strong>
        </h1>
        <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="IEEE Project presentation"
                certLink={project21}
              />
            </Col>
        <h1 className="project-heading" style={{ marginTop: "50px" }}>
        Achievements<strong className="purple">  &Involvements</strong>
        </h1>
        <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Adhi College of Engineering and Technology, Chennai"
                certLink={adhi}
              />
            </Col>
            <Col>
            <CertificateCard
                title="Sri Sairam Institute of Technology"
                certLink={sit}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Adhi College of Engineering and Technology, Chennai"
                certLink={adhi2}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={aids}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={csbs}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={project22}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Dhanalakshmi College of Engineering"
                certLink={project23}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={project34}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={project35}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Dhanalakshmi College of Engineering"
                certLink={project24}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Chennai Institute of Technology, Chennai"
                certLink={project25}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={project31}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={project32}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Sri Sai Ram Engineering College, Chennai"
                certLink={project33}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Chennai Institute of Technology, Chennai"
                certLink={project26}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Chennai Institute of Technology, Chennai"
                certLink={project27}
              />
            </Col>
            <h1 className="project-heading" style={{ marginTop: "50px" }}>
            Event Coordinator <strong className="purple"> & Organizer</strong>
        </h1>
        <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="AIRO 4.0 Organizer"
                certLink={aidsor}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="IEEE Day Organizer"
                certLink={ieeeor}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="BIS(Bureau of Indian Standards) Organizer"
                certLink={is}
              />
            </Col>
            <h1 className="project-heading" style={{ marginTop: "50px" }}>
          Online <strong className="purple">Certificate</strong>
        </h1>
        <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="National level coding Challenge"
                certLink={unstop1}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="K! Hacks 2.0, Anna University"
                certLink={unstop2}
              />
            </Col>
            <Col md={4} sm={6} xs={12} className="project-card">
              <CertificateCard
                title="Shaastra Programming Contest"
                certLink={unstop3}
              />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
