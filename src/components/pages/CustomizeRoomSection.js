import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import roomDesignImage from '../Image/b4.png'; // Replace with your image path

const CustomizeRoomSection = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/room-design'); // Redirect to the Room Design page
  };

  return (
    <section id="Personalize" className="customize-room-section py-5 full-screen">
      <Container fluid>
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h2 className="display-5">Customize Your Room Design</h2>
            <p className="subheading">Transform your space with our innovative room design tool</p>
            <Button
              variant="primary"
              className="mt-3 cs-button"
              style={{ backgroundColor: '#8f2347', border: 'none' }} // Adjust as needed
              onClick={handleCartClick}
            >
              Start Designing
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <img src={roomDesignImage} alt="Room Design" className="img-fluid rounded" />
          </Col>
        </Row>
        <Row className="features-list text-center mt-4">
          {/* Add your feature items here if needed */}
        </Row>
      </Container>
    </section>
  );
};

export default CustomizeRoomSection;
