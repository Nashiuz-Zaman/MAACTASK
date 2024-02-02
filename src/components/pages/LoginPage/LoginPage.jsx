// react
import { useEffect } from "react";

// component
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import LoginForm from "./../../shared/Forms/LoginForm";

// redux
import { useDispatch } from "react-redux";

// hook
import useLoginForm from "../../../hooks/useLoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { setLoginErrors } = useLoginForm();

  useEffect(() => {
    return () => {
      dispatch(setLoginErrors([]));
    };
  }, [dispatch, setLoginErrors]);
  return (
    <div>
      <InnerContainer>
        <LoginForm />
      </InnerContainer>
    </div>
  );
};

export default LoginPage;
