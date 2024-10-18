import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSmile, FaUsers, FaCalendarAlt, FaDollarSign, FaClock, FaHandshake } from 'react-icons/fa';
import '../style/ServicesSection.css'; // Make sure this is the correct path

const ServicesSection = () => {
  return (
    <section id="grantee" >
    <div className="services-section py-5">
      <Container>
        <h2 className="text-center mb-4">Fast, Friendly, and Satisfaction Guarantee</h2>
       
        <Row>
          <Col md={4} className="mb-4">
            <div className="service-card text-center">
              <FaSmile className="mb-3" size={50} />
              <h5>Satisfaction Guarantee</h5>
              <p>
                You don’t need to worry about scams or our performance results. Our company has been verified 
                and strives for optimal results.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card text-center">
              <FaUsers className="mb-3" size={50} />
              <h5>Local Professionals</h5>
              <p>
                Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long 
                and short-term maintenance.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card text-center">
              <FaCalendarAlt className="mb-3" size={50} />
              <h5>Flexible Appointments</h5>
              <p>
                We offer convenient appointment times that can accommodate your busy schedule, day or night, 
                7 days a week.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <div className="service-card text-center">
              <FaDollarSign className="mb-3" size={50} />
              <h5>Free Quotes</h5>
              <p>
                Get personalized cost estimates without any obligation. Experience transparency and peace of mind as 
                you explore our services.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card text-center">
              <FaClock className="mb-3" size={50} />
              <h5>Fast 24-Hour Service</h5>
              <p>
                Need fast handling for repairs to drains, leaks, or something else? Our experts are available 
                anytime to help you solve the problem.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card text-center">
              <FaHandshake className="mb-3" size={50} />
              <h5>100% Commitment-Free</h5>
              <p>
                You are free to ask us about the problems you are facing. We offer a no-commitment approach 
                to put your mind at ease.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default ServicesSection;