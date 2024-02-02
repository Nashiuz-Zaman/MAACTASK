// react
import { useState } from "react";

//  hooks
import useAxios from "./../hooks/useAxios";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../features/auth/authSlice";

const { setRegistrationErrors } = authActions;

// custom hook body starts here
const useRegistrationForm = () => {
  // checkbox state
  const [agreed, setAgreed] = useState(false);

  // extract functions from auth context
  const dispatch = useDispatch();
  const { registrationErrors } = useSelector((store) => store.auth);

  // axios extraction
  const { axiosCustom } = useAxios();

  // checkbox check
  const handleAgreeCheck = () => {
    setAgreed((prev) => !prev);
  };

  // function to run when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setRegistrationErrors([]));

    const form = e.target;

    try {
      const data = {
        name: form.name.value,
        email: form.email.value,
        employeeId: form.employeeId.value,
        password: form.password.value,
        passwordConfirm: form.passwordConfirm.value,
        role: form.role.value,
        phoneNumber: form.phoneNumber.value,
      };

      if (agreed) {
        const res = await axiosCustom.post("/users/signup", data);
        if (res.data.status === "success") {
          form.reset();
          localStorage.setItem("token", res.data.token);
        }
      }
    } catch (error) {
      console.log(error);
      dispatch(setRegistrationErrors([error.response.data.message]));
    }
  };

  return {
    registrationErrors,
    setRegistrationErrors,
    handleSubmit,
    handleAgreeCheck,
    agreed,
  };
};

export default useRegistrationForm;
