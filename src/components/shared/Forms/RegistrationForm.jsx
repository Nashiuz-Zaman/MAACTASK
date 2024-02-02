// react
import PropTypes from "prop-types";

// react router import
import { Link } from "react-router-dom";

// component
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import SecondaryHeading from "./../SecondaryHeading/SecondaryHeading";

// styles
import "./Form.scss";

// hooks
import useRegistrationForm from "../../../hooks/useRegistrationForm";

const RegistrationForm = ({ modifyClasses }) => {
  const { agreed, handleAgreeCheck, handleSubmit, registrationErrors } =
    useRegistrationForm();

  const inputClasses = "form-container__form__input";

  return (
    <div className={`form-container ${modifyClasses}`}>
      <SecondaryHeading
        text={"Create Account"}
        modifyClasses="form-container__heading"
      />

      <p className={"form-container__description"}>
        Fill in the details below to create an account
      </p>

      {/* form */}
      <form className="form-container__form" onSubmit={handleSubmit}>
        <input
          className={inputClasses}
          name="name"
          type="text"
          placeholder="Enter Your Full Name"
          required
        />

        <input
          className={inputClasses}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />

        <input
          className={inputClasses}
          type="text"
          name="employeeId"
          placeholder="Your ID"
          required
        />

        <input
          className={inputClasses}
          type="tel"
          name="phoneNumber"
          placeholder="Your Mobile Number"
          required
        />

        {/* password field */}
        <input
          className={inputClasses}
          type="password"
          name="password"
          placeholder="Password"
        />

        <input
          className={inputClasses}
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
        />

        <select defaultValue={""} className={inputClasses} name="role" required>
          <option value="" disabled>
            Select Your Role
          </option>
          <option value="HUB">HUB</option>
        </select>

        <div className="checkbox-container">
          <input
            onChange={handleAgreeCheck}
            name="terms"
            className="checkbox-container__checkbox"
            type="checkbox"
            checked={agreed}
            required
          />
          <p>
            I read and agree to the <a href="#">Terms & Conditions</a>
          </p>
        </div>

        {/* show errors here */}
        {registrationErrors?.length > 0 && (
          <div className="form-container__errors">
            {registrationErrors.map((error) => {
              return (
                <p
                  key={error}
                  className="form-container__errors__error-message"
                >
                  *Error: {error}
                </p>
              );
            })}
          </div>
        )}

        {/* submit button */}
        <ButtonBtn
          text="Create Account"
          sizeTheme="lg"
          modifyClasses="form-btn"
        />

        <p className="form-container__form__alternative">
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

RegistrationForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default RegistrationForm;
