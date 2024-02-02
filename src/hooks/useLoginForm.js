//  hooks
import useAxios from "./../hooks/useAxios";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../features/auth/authSlice";

// hook
import useToast from "./useToast";

const { setLoginErrors, setProfileData } = authActions;

// custom hook body starts here
const useLoginForm = () => {
  // extract functions from auth context
  const dispatch = useDispatch();
  const { loginErrors } = useSelector((store) => store.auth);
  const { showToast } = useToast();

  // axios extraction
  const { axiosCustom } = useAxios();

  // function to run when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoginErrors([]));

    const form = e.target;
    try {
      const data = {
        employeeId: form.email.value,
        password: form.password.value,
      };

      const res = await axiosCustom.post("/users/login", data);

      if (res.data.status === "success") {
        dispatch(setProfileData(res.data.user));
        showToast("Successfully Logged In", "success");
        form.reset();
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoginErrors([error.response.data.message]));
    }
  };

  return {
    loginErrors,
    setLoginErrors,
    handleSubmit,
  };
};

export default useLoginForm;
