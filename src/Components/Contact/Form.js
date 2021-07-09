import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Buttons from "../../Components/Button/Button";
import errorIcon from "../../assets/contact/desktop/icon-error.svg";
import * as variables from "../../Helpers/Variables";
import { device } from "../../Helpers/MediaQueries";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input,
  textarea {
    border: none;
    outline: none;
    border-bottom: 2px solid ${variables.secondaryColors.lightGrey};
    background-color: transparent;
    padding: 1rem;
    margin-left: auto;
    width: 35rem;
    margin-bottom: 1rem;
    &::placeholder {
      color: ${variables.secondaryColors.lightGrey};
    }

    @media ${device.tablet} {
      margin: 0 auto;
      margin-bottom: 1rem;
      width: 100%;
    }
  }
  textarea {
    margin-top: 2rem;
  }

  .error__message {
    font-size: 1rem;
    display: block;
    margin-left: auto;
  }
  .error__icon {
    width: 1rem;
  }
  .submit {
    margin-top: 1.5rem;

    @media ${device.tablet} {
      margin-bottom: 5rem;
    }
  }
`;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setValue("First", "");
    setValue("Email", "");
    setValue("mobile", "");
    setValue("Message", "");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First Name"
        {...register("First", { required: true, maxLength: 80 })}
      />
      {errors.First && (
        <span className="error__message">
          Can't be empty{" "}
          <img className="error__icon" src={errorIcon} alt="error Icon" />
        </span>
      )}

      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email?.type === "required" && (
        <span className="error__message">
          Email is required{" "}
          <img className="error__icon" src={errorIcon} alt="error Icon" />
        </span>
      )}
      {errors.Email?.type === "pattern" && (
        <span className="error__message">
          Invalid Email Address{" "}
          <img className="error__icon" src={errorIcon} alt="error Icon" />
        </span>
      )}

      <input
        type="tel"
        placeholder="Mobile number"
        {...register("mobile", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      {errors.mobile?.type === "required" && (
        <span className="error__message">
          This field is required{" "}
          <img className="error__icon" src={errorIcon} alt="error Icon" />
        </span>
      )}
      {errors.mobile?.type === "minLength" && (
        <span className="error__message">
          Phone Number must be greater than 6 characters{" "}
          <img className="error__icon" src={errorIcon} alt="error Icon" />
        </span>
      )}
      {errors.mobile?.type === "maxLength" && (
        <span className="error__message">
          Phone number must be less than 12 characters{" "}
          <img className="error__icon" src={errorIcon} alt="error Icon" />
        </span>
      )}

      <textarea
        placeholder="Your Message"
        {...register("Message", { required: true })}
      />
      {errors.Message && (
        <span className="error__message">
          This field is required{" "}
          <img className="error__icon" src={errorIcon} alt="error Icon" />
        </span>
      )}

      <span className="submit" onClick={handleSubmit(onSubmit)}>
        <Buttons text="submit" col="onDark" />
      </span>
    </StyledForm>
  );
};
export default Form;
