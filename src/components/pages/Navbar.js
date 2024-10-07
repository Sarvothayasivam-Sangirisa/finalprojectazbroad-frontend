import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaShoppingCart, FaComments } from 'react-icons/fa';

const CustomNavbar = ({ user, onLogout, isAdmin }) => {

  // Function to handle cart icon click using window.location.href
  const handleCartClick = () => {
    window.location.href = './Card'; // Redirect to the bookings page
  };

  // Function to scroll to the chatbot section
  const handleChatbotClick = () => {
    const chatbotSection = document.getElementById('chatbot'); // Adjust the ID as necessary
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">AZBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!isAdmin && (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#plans">Plans</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#Personalize">Personalize</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                
                
                <Button variant="link" onClick={handleChatbotClick} className="chatbot-icon">
                  <FaComments />
                </Button>
              </>
            )}
            {isAdmin && (
              <>
                <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/admin/users">Manage Users</Nav.Link>
                <Nav.Link href="/admin/services">Manage Services</Nav.Link>
              </>
            )}
          </Nav>

          {user ? (
            <div className="d-flex align-items-center">
              <Button variant="link" onClick={handleCartClick}>
                <FaShoppingCart className="cart-icon" />
              </Button>
              <Button variant="primary" className="ms-3 cs-button" onClick={onLogout}>
                {user} (Logout)
              </Button>
            </div>
          ) : (
            <Button variant="primary" className="ms-3 cs-button" href="/login">
              Login/Sign Up
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
