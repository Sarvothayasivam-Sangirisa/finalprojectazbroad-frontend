import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineBulb, AiOutlineHome, AiOutlineTool } from 'react-icons/ai'; // Import relevant icons
import roomDesignImage from '../Image/b4.png'; // Replace with your image path
import '../style/CustomizeRoomSection.css'; // Make sure this is the correct path

const CustomizeRoomSection = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scrolling effect
    });
  
    // Redirect to the Room Design page
    navigate('/room-design');
  };
  

  return (
    <section id="Personalize" className="customize-room-section  section bg-light py-5">
      <Container fluid>
        {/* First Row: Title and Description */}
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h2 className="display-5 mt-5">Customize Your Room Design</h2>
            <p className="subheading1">
              Transform your space with our innovative room design tool. Effortlessly visualize your ideas in real-time as you experiment with various layouts, 
              furniture styles, and color schemes tailored to your unique preferences.
            </p>
            <Button
              variant="primary"
              className="mt-3 cs-button btn-lg"
              style={{ backgroundColor: '#8f2347', border: 'none' }} // You can adjust colors here
              onClick={handleCartClick}
            >
              Start Designing
            </Button>
          </Col>
          
          {/* Image Section */}
          <Col xs={12} md={6}>
            <img src={roomDesignImage} alt="Room Design" className="img-fluid rounded customize-room-image" />
          </Col>
        </Row>

        {/* Second Row: Icons Section */}
        <Row className="text-center mt-5">
          <Col xs={12} md={4} className="mb-4">
            <AiOutlineBulb className="icon mb-2" size={50} />
            <p>Innovative Ideas</p>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <AiOutlineHome className="icon mb-2" size={50} />
            <p>Perfect Layouts</p>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <AiOutlineTool className="icon mb-2" size={50} />
            <p>Easy Customization</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomizeRoomSection;