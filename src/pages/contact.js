import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    const hubspotPortalId = "242706412";
    const hubspotFormId = "5c15f205-186a-42a7-9102-a8692f7bb927";
    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;

    const payload = {
      fields: [
        { name: "firstname", value: formData.firstName },
        { name: "lastname", value: formData.lastName },
        { name: "email", value: formData.email },
        { name: "interest", value: formData.interest },
        { name: "message", value: formData.message },
      ],
    };

    try {
      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Submission failed.");
      }
    } catch (err) {
      console.error("HubSpot error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <MainNavbar />
      <section className="py-5" style={{ backgroundColor: '#f9f9f7' }}>
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg="8" className="text-center">
              <h2 className="fw-bold">Contact ABC Mental Toughness</h2>
              <p className="text-muted">
                Want to work with us or have a question? Reach out below and we'll get back to you.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8">
              {submitted ? (
                <Alert color="success">Thanks for reaching out! We'll be in touch shortly.</Alert>
              ) : (
                <Form onSubmit={handleSubmit} className="bg-white text-dark rounded p-4 shadow">
                  {error && <Alert color="danger">{error}</Alert>}
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="interest">I'm Interested In</Label>
                    <Input
                      type="select"
                      name="interest"
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Youth Training Programs">Youth Training Programs</option>
                      <option value="1-on-1 Coaching">1-on-1 Coaching</option>
                      <option value="Team Workshops">Team Workshops</option>
                      <option value="Speaking Engagements">Speaking Engagements</option>
                      <option value="Partnership Opportunities">Partnership Opportunities</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="message">Message</Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us more about how we can help..."
                    />
                  </FormGroup>

                  <div className="text-center">
                    <Button color="primary" size="lg" className="fw-bold px-5">
                      Send Message
                    </Button>
                  </div>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
