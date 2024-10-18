import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FAQ = () => {
  return (
    <section id="faq" className="faq-section section full-screen bg-light">
      <Container>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
  <Accordion.Header>What is AIZBOARD?</Accordion.Header>
  <Accordion.Body>
    AIZBOARD is a trusted platform for home repairs and property management.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Are service providers reliable?</Accordion.Header>
  <Accordion.Body>
    Yes, all providers are licensed and fully qualified.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>How do I book a service?</Accordion.Header>
  <Accordion.Body>
    You can easily book a service through our website or mobile app by selecting the service you need and choosing a convenient time.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
  <Accordion.Header>What types of services are offered?</Accordion.Header>
  <Accordion.Body>
    We offer a wide range of services, including plumbing, electrical work, cleaning, and general home repairs.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4">
  <Accordion.Header>How can I contact customer support?</Accordion.Header>
  <Accordion.Body>
    You can reach our customer support team via email or through the contact form on our website. We're here to help!
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="5">
  <Accordion.Header>Is there a satisfaction guarantee?</Accordion.Header>
  <Accordion.Body>
    Yes, we are committed to ensuring your satisfaction. If you're not happy with the service provided, please let us know, and we will make it right.
  </Accordion.Body>
</Accordion.Item>

        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
