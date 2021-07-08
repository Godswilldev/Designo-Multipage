import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Country from "../../Components/Location/Country";
import * as variables from "../../Helpers/Variables";

const StyledContact = styled.div`
  .contact {
    margin-top: 5rem;
    margin-bottom: 15rem;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(2, 50%);
    height: 48rem;
    background-color: ${variables.primaryColors.peach};
    border-radius: 1rem;
    color: ${variables.primaryColors.white};
    padding: 0 7rem;
    &__message {
      h1 {
        margin-bottom: 3rem;
        font-weight: 500;
      }
    }
  }

  .country {
    margin-bottom: 5rem;
  }
`;

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
