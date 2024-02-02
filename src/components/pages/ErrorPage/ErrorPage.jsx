// shared components
import LinkBtn from "../../shared/LinkBtn/LinkBtn";

// style
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      {/* error message */}

      <p>404 | No page found</p>

      {/* link to go back to home */}
      <LinkBtn
        text="Go to Home"
        colorTheme="primaryAlt"
        url="/"
        modifyClasses="w-max"
      />
    </div>
  );
};

export default ErrorPage;
