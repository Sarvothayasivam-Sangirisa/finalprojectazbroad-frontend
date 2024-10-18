import React, { useState, useEffect } from 'react';
import { Container, Form, Alert, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import '../style/login.css';

const ConfirmPaymentplan = () => {
  const [serviceLocation, setServiceLocation] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceAmount, setServiceAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [validationError, setValidationError] = useState('');
  const [duration, setDuration] = useState('1');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [disableInputs, setDisableInputs] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null); // State for uploaded image

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const plan = query.get('plan');
  const service = query.get('service');
  const amount = query.get('amount');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    const loggedInEmail = localStorage.getItem('email'); 
    if (loggedInUser) setUsername(loggedInUser);
    if (loggedInEmail) setEmail(loggedInEmail);
  }, []);

  useEffect(() => {
    if (service && amount) {
      setServiceName(service);
      setServiceAmount(parseFloat(amount));
    }
  }, [service, amount]);

  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login?redirect=/confirm-payment?plan=${plan}`);
    }
  }, [isLoggedIn, navigate, plan]);

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const totalAmount = serviceAmount * duration;

  const validateForm = () => {
    if (!serviceLocation.trim()) {
      setValidationError('Service location is required.');
      setIsAddressValid(false);
      return false;
    }
    setValidationError('');
    setIsAddressValid(true);
    return true;
  };

  const handleProceed = () => {
    const isValid = validateForm();
    if (isValid) {
      setDisableInputs(true);
    }
  };

  const handleImageUpload = (e) => {
    setUploadedImage(e.target.files[0]); // Save the uploaded file
  };

  const handleSuccessPayment = async (details) => {
    try {
      const formData = new FormData();
      formData.append('planName', serviceName);
      formData.append('planserviceLocation', serviceLocation);
      formData.append('planpaymentId', details.id);
      formData.append('planuser', username);
      formData.append('planemail', email);
      formData.append('planduration', duration);
      formData.append('plantotalAmount', totalAmount);
      if (uploadedImage) {
        formData.append('serviceImage', uploadedImage); // Add image to form data
      }

      const response = await axios.post('http://localhost:5000/api/bookings', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set appropriate headers
        },
      });

      setPaymentStatus({ success: true, message: response.data.message });
    } catch (error) {
      console.error('Error processing payment:', error.response ? error.response.data : error.message);
      setPaymentStatus({ success: false, message: 'Error processing payment. Please try again.' });
    }
  };

  return (
    <Container className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-4">Confirm Payment</h2>
        {paymentStatus && (
          <Alert variant={paymentStatus.success ? 'success' : 'danger'} className="mt-3">
            {paymentStatus.message}
          </Alert>
        )}
        
        <p><strong>Plan:</strong> {serviceName || 'Loading...'}</p>
        <p><strong>Total Amount:</strong> ${totalAmount.toFixed(2) || 'Loading...'}</p>

        <Form>
          <Form.Group>
            <Form.Label>Service Location</Form.Label>
            <Form.Control
              type="text"
              value={serviceLocation}
              onChange={(e) => setServiceLocation(e.target.value)}
              required
              disabled={disableInputs}
            />
            {validationError && <Alert variant="danger">{validationError}</Alert>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control as="select" value={duration} onChange={handleDurationChange} disabled={disableInputs}>
              <option value="1">1 Month</option>
              <option value="6">6 Months</option>
              <option value="12">1 Year</option>
            </Form.Control>
          </Form.Group>

          {/* Image upload */}
          <Form.Group>
            <Form.Label>Upload Customized room Image (Optional)</Form.Label>
            <Form.Control type="file" onChange={handleImageUpload} disabled={disableInputs} />
          </Form.Group>

          {!isAddressValid ? (
            <Button variant="primary" className="mt-3 cs-button" onClick={handleProceed}>Proceed to Payment</Button>
          ) : null}

          {isAddressValid && (
            <>
              <h3>Payment Information</h3>
              <PayPalScriptProvider options={{ "client-id": "AT4si2YLorhpc5Nk-YiaE8za2qLz2Jo9cSp3AgoJnFZAXpum0idHZOu35dqP5bj0S9nB6qHP0h7Lk9k_" }}>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: totalAmount.toFixed(2),
                        },
                      }],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    handleSuccessPayment(details);
                  }}
                  onError={(err) => {
                    setPaymentStatus({ success: false, message: 'Payment failed. Please try again.' });
                  }}
                />
              </PayPalScriptProvider>
            </>
          )}
        </Form>
      </div>
    </Container>
  );
}; 

export default ConfirmPaymentplan;
