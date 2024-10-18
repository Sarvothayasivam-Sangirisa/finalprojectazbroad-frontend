// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaCheckCircle, FaTools, FaCalendarCheck } from 'react-icons/fa';

// const Plans = () => {
//   const [plans, setPlans] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPlans();
//   }, []);

//   // Fetch plans from the API
//   const fetchPlans = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/service-plans');
//       setPlans(response.data);
//     } catch (error) {
//       console.error('Error fetching plans:', error);
//     }
//   };

//   // Handle choosing a plan
//   const handleChoosePlan = (planId, planType, planAmount) => {
//     const token = localStorage.getItem('token');
//     const queryParams = `plan=${planId}&service=${encodeURIComponent(planType)}&amount=${planAmount}`;

//     if (token) {
//       // User is logged in, navigate to payment page
//       navigate(`/confirm-payment1?${queryParams}`);
//     } else {
//       // User is not logged in, navigate to login page with redirect to payment
//       navigate(`/login?redirect=/confirm-payment1?${queryParams}`);
//     }
//   };

//   // Plan description rendering
//   const PlanDescription = ({ description }) => {
//     const words = description.split(','); // Split the description into individual words
//     return (
//       <div>
//         {words.map((word, index) => (
//           <p key={index}>
//             <FaCheckCircle size={20} style={{ marginRight: '8px', color: '#f0a6a6' }} /> {word}
//           </p>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section id="plans" className="service-plans section bg-light py-5">
//       <Container>
//         <h2 className="text-center mb-3 mt-4" style={{ color: '#8f2347', fontWeight: 'bold' }}>
//           Our Service Plans
//         </h2>
//         <Row>
//           {plans.map(plan => (
//             <Col xs={12} sm={12} md={6} lg={4} key={plan._id} className="mb-4">
//               <Card className="text-center p-4 shadow-lg h-100">
//                 <h3>
//                   <FaTools size={20} className="me-2"  style={{ marginRight: '8px', color: '#f0a6a6' }} /> {plan.planType} Plan
//                 </h3>
//                 <h4>${plan.planAmount.toFixed(2)}</h4>
                
//                 {/* Render Plan Description */}
//                 <PlanDescription description={plan.planDescription} />

//                 <Button
//                   variant="primary" className="cs-button w-100"
//                   onClick={() => handleChoosePlan(plan._id, plan.planType, plan.planAmount)}
//                 >
//                   <FaCalendarCheck size={20} className="me-2" /> Choose Plan
//                 </Button>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Plans;

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaCheckCircle, FaCalendarCheck } from 'react-icons/fa'; // Import from react-icons

// const Plans = () => {
//   const [plans, setPlans] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPlans();
//   }, []);

//   // Fetch plans from the API
//   const fetchPlans = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/service-plans');
//       setPlans(response.data);
//     } catch (error) {
//       console.error('Error fetching plans:', error);
//     }
//   };

//   // Handle choosing a plan
//   const handleChoosePlan = (planId, planType, planAmount) => {
//     const token = localStorage.getItem('token');
//     const queryParams = `plan=${planId}&service=${encodeURIComponent(planType)}&amount=${planAmount}`;

//     if (token) {
//       // User is logged in, navigate to payment page
//       navigate(`/confirm-payment1?${queryParams}`);
//     } else {
//       // User is not logged in, navigate to login page
//       navigate(`/login?redirect=/confirm-payment1?${encodeURIComponent(queryParams)}`);
//     }
//   };

//   // Plan description rendering
//   const PlanDescription = ({ description }) => {
//     const words = description.split(','); // Split the description into individual words
//     return (
//       <div style={{ textAlign: 'left' }}> {/* Align content to the left */}
//         {words.map((word, index) => (
//           <p key={index} style={{ marginBottom: '5px', color: '#6c757d' }}> {/* Add spacing between lines if needed */}
//             <FaCheckCircle size={18} style={{ marginRight: '10px', color: '#f0a6a6' }} /> {word}
//           </p>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section id="plans" className="service-plans section bg-light py-5">
//       <Container>
//         <h2 className="text-center mb-5" style={{ color: '#8f2347', fontWeight: 'bold', fontSize: '2.5rem' }}>
//           Our Service Plans
//         </h2>

//         <Row className="justify-content-center">
//           {plans.map(plan => (
//             <Col xs={12} sm={12} md={6} lg={4} key={plan._id} className="mb-4">
//               <Card 
//                 className="text-center p-4 shadow-lg h-100"
//                 style={{
//                   height: '500px', // Increased height to 500px
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
//                 <h3 style={{ color: '#333', marginBottom: '20px', fontWeight: '600', color: '#8f2347', fontWeight: 'bold' }}>
//                   {plan.planType} Plan
//                 </h3>

//                 <h4 style={{ marginBottom: '40px', color: '#8f2347', fontWeight: 'bold' }}>
//                   ${plan.planAmount.toFixed(2)}
//                 </h4>

//                 <Button
//                   variant="primary"
//                   className="cs-button w-100 mt-auto"
//                   style={{ backgroundColor: '#8f2347', borderColor: '#8f2347' }}
//                   onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a04565'}
//                   onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8f2347'}
//                   onClick={() => handleChoosePlan(plan._id, plan.planType, plan.planAmount)}
//                 >
//                   <FaCalendarCheck size={20} className="me-2" /> Choose Plan
//                 </Button>

//                 {/* Add space between the button and the plan description */}
//                 <div style={{ marginTop: '50px' }}>
//                   <PlanDescription description={plan.planDescription} />
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Plans;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaCalendarCheck } from 'react-icons/fa'; // Import from react-icons
import '../style/Plans.css'; // Include custom CSS

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlans();
  }, []);

  // Fetch plans from the API
  const fetchPlans = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/service-plans');
      setPlans(response.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  // Handle choosing a plan
  const handleChoosePlan = (planId, planType, planAmount) => {
    const token = localStorage.getItem('token');
    const queryParams = `plan=${planId}&service=${encodeURIComponent(planType)}&amount=${planAmount}`;

    if (token) {
      // User is logged in, navigate to payment page
      navigate(`/confirm-payment1?${queryParams}`);
    } else {
      // User is not logged in, navigate to login page
      navigate(`/login?redirect=/confirm-payment1?${encodeURIComponent(queryParams)}`);
    }
  };

  // Plan description rendering
  const PlanDescription = ({ description }) => {
    const words = description.split(','); // Split the description into individual words
    return (
      <div style={{ textAlign: 'left' }}> {/* Align content to the left */}
        {words.map((word, index) => (
          <p key={index} style={{ marginBottom: '5px', color: '#6c757d' }}> {/* Add spacing between lines if needed */}
            <FaCheckCircle size={18} style={{ marginRight: '10px', color: '#f0a6a6' }} /> {word}
          </p>
        ))}
      </div>
    );
  };

  return (
    <section id="plans" className="service-plans section parallax-section bg-light py-5">
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#8f2347', fontWeight: 'bold', fontSize: '2.5rem' }}>
          Our Service Plans
        </h2>

        <Row className="justify-content-center">
          {plans.map(plan => (
            <Col xs={12} sm={12} md={6} lg={4} key={plan._id} className="mb-4">
              <Card 
                className="text-center p-4 shadow-lg h-100 plan-card"
                style={{
                  height: '500px', // Increased height to 500px
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  borderRadius: '10px',
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
                <h3 style={{ color: '#333', marginBottom: '20px', fontWeight: '600', color: '#8f2347', fontWeight: 'bold' }}>
                  {plan.planType} Plan
                </h3>

                <h4 style={{ marginBottom: '40px', color: '#8f2347', fontWeight: 'bold' }}>
                  ${plan.planAmount.toFixed(2)}
                </h4>

                <Button
                  variant="primary"
                  className="cs-button w-100 mt-auto"
                  style={{ backgroundColor: '#8f2347', borderColor: '#8f2347' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#a04565'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#8f2347'}
                  onClick={() => handleChoosePlan(plan._id, plan.planType, plan.planAmount)}
                >
                  <FaCalendarCheck size={20} className="me-2" /> Choose Plan
                </Button>

                {/* Add space between the button and the plan description */}
                <div style={{ marginTop: '50px' }}>
                  <PlanDescription description={plan.planDescription} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Plans;
