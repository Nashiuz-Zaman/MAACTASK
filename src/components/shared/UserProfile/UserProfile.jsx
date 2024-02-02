// react imports
import PropTypes from "prop-types";
import { useState } from "react";

// image
import userPhoto from "./../../../assets/dashboard/userprofile.png";
import chevronDown from "./../../../assets/dashboard/chevron-down.svg";

// scss
import "./UserProfile.scss";

const UserProfile = ({ profileData }) => {
  // hover state
  const [panelOpen, setPanelOpen] = useState(false);

  // function to control info panel
  const handleShowInfoPanel = () => {
    setPanelOpen((prev) => {
      return !prev;
    });
  };

  // assign name and photo variables
  const name = profileData?.name;

  return (
    <div className="user-profile">
      {/* profile image container div */}
      <div className="user-profile__img-container">
        <img src={userPhoto} alt="user image" />
      </div>

      <p className="user-profile__name">{name ? name : "No user"}</p>

      <button>
        <img src={chevronDown} alt="arrow-down" />
      </button>

      {/* positioned div for display name */}
      <div
        className={`user-profile__panel ${
          panelOpen ? "user-profile__panel--open" : ""
        }`}
      ></div>
    </div>
  );
};

UserProfile.propTypes = {
  profileData: PropTypes.object,
};

export default UserProfile;
