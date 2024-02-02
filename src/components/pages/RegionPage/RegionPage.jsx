import { Link } from "react-router-dom";

// styles
import "./RegionPage.scss";

const RegionPage = () => {
  return (
    <div className="region-page">
      <div className="region-page__top-panel">
        <h3>Region List</h3>

        <Link to="/dashboard/create-region" className="create-btn">
          <span>Create New</span>
        </Link>
      </div>
    </div>
  );
};

export default RegionPage;
