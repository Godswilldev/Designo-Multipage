import React from "react";
import { useForm } from "react-hook-form";
import Buttons from "../../Components/Button/Button";
import errorIcon from "../../assets/contact/desktop/icon-error.svg";
import { StyledForm } from "./FormStyles";

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
