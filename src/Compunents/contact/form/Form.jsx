import React from "react";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss"

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_q5903vn", "template_cm9d5uc", data, "AOrVa5yFKtc3f7U4G")
      .then((response) => {
        console.log("SUCCESS", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks your submitting your Query!");
    document.getElementById("queryForm").reset();
  };

  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-filed">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            {...register("from_name", { required: "Name is required" })}
          />
          {errors.from_name?.message && (
            <p className="errors">{errors.from_name?.message}</p>
          )}
        </div>
        <div className="input-filed">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="errors">{errors.reply_to?.message}</p>
          )}
        </div>
        <div className="input-filed">
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone number is required",
              minLength: {
                value: 8,
                message: "Phone number is not valid",
              },
            })}
          />
          {errors.phone_number?.message && (
            <p className="errors">{errors.phone_number?.message}</p>
          )}
        </div>
        <div className="input-filed">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "subject is required",
              minLength: {
                value: 10,
                message: "Minimum 10 charaters required",
              },
            })}
          />
           {errors.subject?.message && (
            <p className="errors">{errors.subject?.message}</p>
          )}
        </div>
        <div className="input-filed full-width ">
          <textarea
            className="textarea"
            name="message"
            placeholder="Your message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum 20 charaters required",
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 charaters allowed",
              },
            })}
          />
          {errors.message?.message && (
            <p className="errors">{errors.message?.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
