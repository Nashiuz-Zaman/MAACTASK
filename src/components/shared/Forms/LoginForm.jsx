// react
import PropTypes from "prop-types";

// react router import
import { Link } from "react-router-dom";

// component
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import SecondaryHeading from "./../SecondaryHeading/SecondaryHeading";

// hooks
import useLoginForm from "../../../hooks/useLoginForm";

// styles
import "./Form.scss";

const LoginForm = ({ modifyClasses }) => {
  const { handleSubmit, loginErrors } = useLoginForm();
  const inputClasses = "form-container__form__input";

  return (
    <div className={`form-container ${modifyClasses}`}>
      <SecondaryHeading
        text={"Welcome Back!"}
        modifyClasses="form-container__heading"
      />

      <p className={"form-container__description"}>
        Please login to your account
      </p>

      {/* form */}
      <form className="form-container__form" onSubmit={handleSubmit}>
        <input
          className={inputClasses}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />

        {/* password field */}
        <input
          className={inputClasses}
          type="password"
          name="password"
          placeholder="Password"
        />

        {/* show errors here */}
        {loginErrors?.length > 0 && (
          <div className="form-container__errors">
            {loginErrors.map((error) => {
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
        <ButtonBtn text="Sign in" sizeTheme="lg" modifyClasses="form-btn" />

        <p className="form-container__form__alternative">
          Don&apos;t have any account? <Link to={"/registration"}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default LoginForm;
