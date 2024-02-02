// react
import { useEffect } from "react";

// component
import RegistrationForm from "../../shared/Forms/RegistrationForm";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// redux
import { useDispatch } from "react-redux";

// hook
import useRegistrationForm from "../../../hooks/useRegistrationForm";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { setRegistrationErrors } = useRegistrationForm();

  useEffect(() => {
    return () => {
      dispatch(setRegistrationErrors([]));
    };
  }, [dispatch, setRegistrationErrors]);

  return (
    <div>
      <InnerContainer>
        <RegistrationForm />
      </InnerContainer>
    </div>
  );
};

export default RegistrationPage;
