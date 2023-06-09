import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setTimeout( () => {
        setIsSubmitted(true);
    }, 500);
    
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.style.backgroundColor = "transparent";
    submitBtn.style.borderColor = "red";
    submitBtn.style.color = "black";
    submitBtn.textContent = "Good Job!";
  };

  const handleButtonClick = () => {
    const button = document.getElementById("submit-btn");
    button.style.backgroundColor = "red";
    button.textContent = "Answer all my questions!"
  }

  return (
    <div className="form-content">
      <h1>Depression Form</h1>
      {isSubmitted ? (
        <p id="success-message">Form is submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div">
            <label id="name-div">
              Name:
              <input
                id="name-input"
                type="text"
                name="name"
                {...register("firstName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </label>
            {errors.firstName && (
              <p id="name-error-message">
                First name is required and should contain only letters.
              </p>
            )}

            <br />

            <label id="email-div">
              Email:
              <input
                id="email-input"
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                })}
              />
            </label>
            {errors.email && (
              <p id="email-error-message">
                Please enter a valid email address.
              </p>
            )}
            <br />
            <div id="radio-div">
              <p id="radio-question">
                How depressed are you because of Canvas assignments?
              </p>
              <br></br>
              <div className="opt">
              <input
                id="crying"
                type="radio"
                value={"crying"}
                name="depressionLevel"
                {...register("depressionLevel", { required: true })}
              ></input>
              <label for="crying">crying</label>
              </div>

              <br></br>
              <div className="opt">
              <input
                id="dying"
                type="radio"
                value={"dying"}
                name="depressionLevel"
                {...register("depressionLevel", { required: true })}
              ></input>
              <label for="dying">dying</label>
              </div>

              <br></br>
              <div className="opt">
              <input
                id="surviving"
                type="radio"
                value={"surviving"}
                name="depressionLevel"
                {...register("depressionLevel", { required: true })}
              ></input>
              <label for="surviving">surviving</label>
              </div>

              <br></br>
              {errors.depressionLevel && (
                <p id="radio-error-message">
                  Please select a depression level.
                </p>
              )}
            </div>
          </div>

          <button id="submit-btn" type="submit" onClick={handleButtonClick}>Submit Yourself To Me</button>
        </form>
      )}
    </div>
  );
};

export default Form;
