import React from "react";
import Form from "./Form";
import Country from "../../Components/Location/Country";
import { StyledContact } from "./ContactStyles";
const ContactUs = () => {
  return (
    <StyledContact>
      <div className="contact">
        <div className="contact__message">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            <br />
            idea and find out how we can help your business grow. If you are
            <br />
            looking for unique digital experiences that’s relatable to your
            <br />
            users, drop us a line.
          </p>
        </div>

        <div className="contact__form">
          <Form />
        </div>
      </div>

      <div className="country">
        <Country />
      </div>
    </StyledContact>
  );
};

export default ContactUs;
