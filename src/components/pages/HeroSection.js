// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faCheckCircle, faClock, faUserTie, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import door1 from '../Image/door.webp';
// import window from '../Image/window.webp';

// const HeroSection = () => {
//   return (
//     <section id="home" className="hero-section full-screen d-flex flex-column justify-content-center align-items-center text-center">
//       <Container fluid>
//         <Row className="align-items-center justify-content-center">
//           <Col md={3} className="hero-image d-none d-md-block">
//             <img src={door1} alt="Worker fixing a door" className="img-fluid rounded same-size" />
//           </Col>
//           <Col md={6} className="hero-content text-center">
//             <p className="subheading">Maintenances - Repairs - Improvements</p>
//             <h1 className="display-5">Need property management or repair your home?<br/> We can help!</h1>
//             <ul className="benefits-list list-unstyled">
//               <li>Free Quotes</li>
//               <li>100% Commitment-Free</li>
//             </ul>
//             <Button variant="light" className="call-us-button mt-3">
//               <FontAwesomeIcon icon={faPhone} className="fa-phone" /> Call Us Now
//             </Button>
//           </Col>
//           <Col md={3} className="hero-image d-none d-md-block">
//             <img src={window} alt="Window cleaning" className="img-fluid rounded same-size" />
//           </Col>
//         </Row>
//         <div className="benefits-icons benefits-background text-white py-4 mt-5">
//   <Row className="text-center">
//     <Col xs={6} md={3} className="icon-item">
//       <FontAwesomeIcon icon={faCheckCircle} className="icon mb-2" />
//       <p>Satisfaction Guarantee</p>
//     </Col>
//     <Col xs={6} md={3} className="icon-item">
//       <FontAwesomeIcon icon={faClock} className="icon mb-2" />
//       <p>24H Availability</p>
//     </Col>
//     <Col xs={6} md={3} className="icon-item">
//       <FontAwesomeIcon icon={faUserTie} className="icon mb-2" />
//       <p>Local US Professional</p>
//     </Col>
//     <Col xs={6} md={3} className="icon-item">
//       <FontAwesomeIcon icon={faCalendarAlt} className="icon mb-2" />
//       <p>Flexible Appointments</p>
//     </Col>
//   </Row>
// </div>

//       </Container>
//     </section>
//   );
// };

// export default HeroSection;

// try text animination
// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faCheckCircle, faClock, faUserTie, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import door1 from '../Image/door.webp';
// import window from '../Image/window.webp';
// import '../style/HeroSection.css'; // Adding a custom CSS file for animations

// const HeroSection = () => {
//   return (
//     <section id="home" className="hero-section full-screen d-flex flex-column justify-content-center align-items-center text-center">
//       <Container fluid>
//         <Row className="align-items-center justify-content-center">
//           <Col md={3} className="hero-image d-none d-md-block">
//             <img src={door1} alt="Worker fixing a door" className="img-fluid rounded same-size" />
//           </Col>
//           <Col md={6} className="hero-content text-center">
//             <p className="subheading fadeIn">Maintenances - Repairs - Improvements</p>
//             <h1 className="display-5 fadeIn">
//               Need property management or repair your home?<br/> We can help!
//             </h1>
//             <ul className="benefits-list list-unstyled fadeIn">
//               <li>Free Quotes</li>
//               <li>100% Commitment-Free</li>
//             </ul>
//             <Button variant="light" className="call-us-button mt-3 fadeIn">
//               <FontAwesomeIcon icon={faPhone} className="fa-phone" /> Call Us Now
//             </Button>
//           </Col>
//           <Col md={3} className="hero-image d-none d-md-block">
//             <img src={window} alt="Window cleaning" className="img-fluid rounded same-size" />
//           </Col>
//         </Row>
//         <div className="benefits-icons benefits-background text-white py-4 mt-5">
//           <Row className="text-center">
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faCheckCircle} className="icon mb-2" />
//               <p>Satisfaction Guarantee</p>
//             </Col>
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faClock} className="icon mb-2" />
//               <p>24H Availability</p>
//             </Col>
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faUserTie} className="icon mb-2" />
//               <p>Local US Professional</p>
//             </Col>
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faCalendarAlt} className="icon mb-2" />
//               <p>Flexible Appointments</p>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default HeroSection;

// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faCheckCircle, faClock, faUserTie, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
//  import '../style/HeroSection.css'; // Adding a custom CSS file for animations
//  import home1 from '../Image/home1.png';


// const HeroSection = () => {
//   return (
//     <section id="home" className="hero-section full-screen d-flex flex-column justify-content-center align-items-center text-center">
//       <Container fluid>
//         <Row className="align-items-center justify-content-center">
//           {/* Image on the left */}
//           <Col md={6} className="hero-image d-none d-md-block">
//                       <img src={home1} alt=" home1" className="img-fluid rounded same-size" />
//           </Col>

//           {/* Text on the right */}
//           <Col md={6} className="hero-content text-center">
//             <p className="subheading fadeIn">Maintenances - Repairs - Improvements</p>
//             <h1 className="display-5 fadeIn">
//               Need property management or repair your home?<br /> We can help!
//             </h1>
//             <ul className="benefits-list list-unstyled fadeIn">
//               <li>Free Quotes</li>
//               <li>100% Commitment-Free</li>
//             </ul>
//             <Button variant="light" className="call-us-button mt-3 fadeIn">
//               <FontAwesomeIcon icon={faPhone} className="fa-phone" /> Call Us Now
//             </Button>
//           </Col>
//         </Row>
//         <div className="benefits-icons benefits-background text-white py-4 mt-5">
//           <Row className="text-center">
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faCheckCircle} className="icon mb-2" />
//               <p>Satisfaction Guarantee</p>
//             </Col>
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faClock} className="icon mb-2" />
//               <p>24H Availability</p>
//             </Col>
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faUserTie} className="icon mb-2" />
//               <p>Local US Professional</p>
//             </Col>
//             <Col xs={6} md={3} className="icon-item fadeIn">
//               <FontAwesomeIcon icon={faCalendarAlt} className="icon mb-2" />
//               <p>Flexible Appointments</p>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default HeroSection;
//img change
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCheckCircle, faClock, faUserTie, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../style/HeroSection.css'; // Adding a custom CSS file for animations

const images = [
  'https://i.ibb.co/1780rYk/pexels-cottonbro-4108790-1.jpg',
  'https://i.ibb.co/gRMDnsd/Woman-Cleaning-Furniture.webp',
  'https://i.ibb.co/hHLS2fB/customized-room-design-4.png',
  'https://i.ibb.co/n39jsF4/pexels-cottonbro-4108809.jpg',
  'https://i.ibb.co/xD99MZH/istockphoto-509040406-612x612.jpg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section full-screen d-flex flex-column justify-content-center align-items-center text-center ">
      <div className="background-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <Container fluid>
          <Row className="align-items-center justify-content-center">
            {/* <Col md={3} className="hero-image d-none d-md-block">
              <img src={door1} alt="Worker fixing a door" className="img-fluid rounded same-size" />
            </Col> */}
            <Col md={6} className="hero-content text-center mt-5 "style={{ color: '#B22150', fontWeight: 900 }}>
              <p className="subheading fadeIn">Maintenances - Repairs - Improvements</p>
              <h1 className="display-5 fadeIn"style={{ color: '#B22150', fontWeight: 700 }}>
                Need property management or repair your home?<br/> We can help!
              </h1>
              <ul className="benefits-list list-unstyled fadeIn">
                <li>Free Quotes</li>
                <li>100% Commitment-Free</li>
              </ul>
              <Button variant="light" className="call-us-button mt-3 fadeIn">
                <FontAwesomeIcon icon={faPhone} className="fa-phone" /> Call Us Now
              </Button>
            </Col>
            {/* <Col md={3} className="hero-image d-none d-md-block">
              <img src={window} alt="Window cleaning" className="img-fluid rounded same-size" />
            </Col> */}
          </Row>
          <div className="benefits-icons benefits-background text-white py-4 mt-2"style={{ color: '#B22150', fontWeight: 700 }}>
            <Row className="text-center">
              <Col xs={6} md={3} className="icon-item fadeIn">
                <FontAwesomeIcon icon={faCheckCircle} className="icon mb-2" />
                <p>Satisfaction Guarantee</p>
              </Col>
              <Col xs={6} md={3} className="icon-item fadeIn">
                <FontAwesomeIcon icon={faClock} className="icon mb-2" />
                <p>24H Availability</p>
              </Col>
              <Col xs={6} md={3} className="icon-item fadeIn">
                <FontAwesomeIcon icon={faUserTie} className="icon mb-2" />
                <p>Local US Professional</p>
              </Col>
              <Col xs={6} md={3} className="icon-item fadeIn">
                <FontAwesomeIcon icon={faCalendarAlt} className="icon mb-2" />
                <p>Flexible Appointments</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
