// react
import PropTypes from "prop-types";

// react router import
import { Link } from "react-router-dom";

// component
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import SecondaryHeading from "./../SecondaryHeading/SecondaryHeading";

// styles
import "./Form.scss";

const LoginForm = ({ modifyClasses }) => {
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
      <form className="form-container__form" onSubmit={null}>
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
        {/* {registrationErrors?.length > 0 && (
            <div className="space-y-1 mt-4">
              {registrationErrors.map((error) => {
                return (
                  <p
                    key={error}
                    className="text-sm text-center font-semibold text-red-600"
                  >
                    * {error}
                  </p>
                );
              })}
            </div>
          )} */}

        {/* submit button */}
        <ButtonBtn text="Sign in" sizeTheme="lg" modifyClasses="form-btn" />

        <p className="form-container__form__alternative">
          Don&apos;t have any account? <Link to={"/login"}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default LoginForm;
