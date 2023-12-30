import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setAnimationStarted(true);
  }, []);
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required()
  });

  const handleSubmitNew = (e) => {
    e.preventDefault();

    // Replace these values with your EmailJS template parameters
    const templateParams = {
      from_subject: e.target.subject.value,
      to_name: "Marri Sai Chandan",
      from_name: e.target.firstName.value+' '+e.target.lastName.value,
      message: e.target.message.value+" Please contact back on the mail provided. "+e.target.email.value,
      };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS values
    emailjs.send("service_0nby2yh","template_53314lh", templateParams,'XlRE1wA8yInTGDCck')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (

        <Form noValidate onSubmit={handleSubmitNew}>
          <div className="home-container">
            <div className={`animated-component ${animationStarted ? 'animate' : ''}`}>
              <div className="yellow-rectangle-new"/>
            </div>
            <div className="form-container">
              <div className="form-content">
                <Row className="mb-3">
                  <h3>Get in Touch</h3>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>First name (required)</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      required
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Last name (required)</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      required
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Email (required)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}
                      md="12" className="position-relative mb-3">
                    <Form.Label>Subject (required)</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="subject"
                      value={values.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                
                <Row className="mb-3">
                  <Form.Group className="position-relative mb-3">
                    <Form.Label controlId="floatingTextarea2" label="Message (required)">
                    Message (required)
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        style={{ height: '100px', maxHeight: '200px' }}
                        required
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                      />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.message}
                      </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                

                <Button className='Button' type="submit">Submit form</Button>
              </div>
              
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Contact