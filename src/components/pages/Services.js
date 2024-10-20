// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// // import door1 from '../Image/door.webp';

// import axios from 'axios';

// const Services = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/services');
//       setServices(response.data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     }
//   };

//   const handleBookNow = (service) => {
//     const { _id, serviceName, serviceAmountPerHour } = service;
//     window.location.href = `confirm-payment?plan=${_id}&name=${encodeURIComponent(serviceName)}&amount=${serviceAmountPerHour}`;
//   };

//   return (
//     <section id="services" className="services section bg-light py-5">
//       <Container>
//         <h2 className="text-center mb-5" style={{ color: '#8f2347', fontWeight: 'bold', fontSize: '2.5rem' }}>
//           Addtinal Services
//         </h2>
//         <Row className="justify-content-center">
//           {services.map(service => (
//             <Col xs={12} sm={6} md={4} lg={3} key={service._id} className="mb-4">
//               <Card 
//                 className="text-center p-4 shadow-lg h-100 service-card"
//                 style={{
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   borderRadius: '10px',
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                   e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
//                 }}
//               >
//                {/* <img src={door1} alt="Worker fixing a door" className="img-fluid rounded same-size" /> */}
//                 <h5 style={{ color: '#8f2347', fontWeight: 'bold' }}>{service.serviceName}</h5>
//                 <p style={{ color: '#6c757d', marginBottom: '20px' }}>{service.serviceDescription}</p>
//                 <h6 style={{ marginBottom: '40px', color: '#8f2347', fontWeight: 'bold' }}>
//                   ${service.serviceAmountPerHour} / hour
//                 </h6>
//                 <Button 
//                   variant="primary" 
//                   className="cs-button w-100 mt-auto"
//                   style={{ backgroundColor: '#8f2347', borderColor: '#8f2347' }}
//                   onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a04565'}
//                   onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8f2347'}
//                   onClick={() => handleBookNow(service)}
//                 >
//                   Book Now
//                 </Button>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Services;

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';

// const Services = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/services');
//       setServices(response.data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     }
//   };

//   const handleBookNow = (service) => {
//     const { _id, serviceName, serviceAmountPerHour } = service;
//     window.location.href = `confirm-payment?plan=${_id}&name=${encodeURIComponent(serviceName)}&amount=${serviceAmountPerHour}`;
//   };

//   return (
//     <section id="services" className="services section bg-light py-5">
//       {/* Parallax effect starts here */}
//       <div className="overlay"></div> {/* Dark overlay for better contrast */}
//       <div className="text-overlay">
//       </div>
//       <Container className="mt-5">
//         <Row className="justify-content-center">
//         <h2>Additional Services</h2>

//           {services.map(service => (
//             <Col xs={12} sm={6} md={4} lg={3} key={service._id} className="mb-4">
//               <Card 
//                 className="text-center p-4 shadow-lg h-100 service-card"
//                 style={{
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   borderRadius: '10px',
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                   e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
//                 }}
//               >
//                {/* <img src={door1} alt="Worker fixing a door" className="img-fluid rounded same-size" /> */}
//                 <h5 style={{ color: '#8f2347', fontWeight: 'bold' }}>{service.serviceName}</h5>
//                 <p style={{ color: '#6c757d', marginBottom: '20px' }}>{service.serviceDescription}</p>
//                 <h6 style={{ marginBottom: '40px', color: '#8f2347', fontWeight: 'bold' }}>
//                   ${service.serviceAmountPerHour} / hour
//                 </h6>
//                 <Button 
//                   variant="primary" 
//                   className="cs-button w-100 mt-auto"
//                   style={{ backgroundColor: '#8f2347', borderColor: '#8f2347' }}
//                   onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a04565'}
//                   onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8f2347'}
//                   onClick={() => handleBookNow(service)}
//                 >
//                   Book Now
//                 </Button>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Services;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [groupedServices, setGroupedServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
      groupServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const groupServices = (services) => {
    const groups = [];
    for (let i = 0; i < services.length; i += 4) {
      groups.push(services.slice(i, i + 4));
    }
    setGroupedServices(groups);
  };

  const handleBookNow = (service) => {
    const { _id, serviceName, serviceAmountPerHour } = service;
    window.location.href = `/confirm-payment?plan=${_id}&name=${encodeURIComponent(serviceName)}&amount=${serviceAmountPerHour}`;
  };

  return (
    <section id="services" className="services section bg-light py-5">
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#F8F9FA', fontWeight: 'bold', fontSize: '2.5rem' }}>
          Additional Services
        </h2>
        <Carousel interval={null}>
          {groupedServices.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map(service => (
                  <Col xs={12} sm={6} md={4} lg={3} key={service._id} className="mb-4">
                    <Card 
                      className="text-center p-3 shadow-lg h-100 service-card"
                      style={{
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        height: '380px'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      {service.serviceImage && (
                        <Card.Img 
                          variant="top" 
                          src={`http://localhost:5000/uploads/${service.serviceImage}`} 
                          style={{
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '10px 10px 0 0',
                          }}
                        />
                      )}
                      <Card.Body className="d-flex flex-column">
                        <h5 style={{ color: '#8f2347', fontWeight: 'bold', fontSize: '1.1rem' }}>{service.serviceName}</h5>
                        <p style={{ color: '#8f2347', fontSize: '0.9rem', marginBottom: '10px' }}>{service.serviceDescription}</p>
                        <h6 style={{ color: '#8f2347', fontWeight: 'bold', fontSize: '1rem', marginBottom: '15px' }}>
                          ${service.serviceAmountPerHour} / hour
                        </h6>
                        <Button 
                          variant="primary" 
                          className="cs-button w-100 mt-auto"
                          style={{ backgroundColor: '#8f2347', borderColor: '#8f2347' }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a04565'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8f2347'}
                          onClick={() => handleBookNow(service)}
                        >
                          Book Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Services;
