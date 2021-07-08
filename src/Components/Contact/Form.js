import React from "react";
import { useForm } from "react-hook-form";
import Buttons from "../../Components/Button/Button";
export default function Form() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First"
        {...register("First", { required: true, maxLength: 80 })}
      />
      {errors.First && <span>This field is required</span>}
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email?.type === "required" && "Email is required"}
      {errors.Email?.type === "pattern" && "Invalid Email Address"}
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("mobile", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      {errors.mobile?.type === "required" && "This field is required"}
      {errors.mobile?.type === "minLength" &&
        "Phone number must be greater than 6 characters"}
      {errors.mobile?.type === "maxLength" &&
        "Phone number must be less than 12 characters"}
      <textarea {...register("Message", { required: true })} />
      {errors.Message && <span>This field is required</span>}
      <span onClick={handleSubmit(onSubmit)}>
        <Buttons text="submit" col="onLight" />
      </span>
    </form>
  );
}
