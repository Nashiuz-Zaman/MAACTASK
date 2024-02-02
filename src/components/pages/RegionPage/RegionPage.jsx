import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// styles
import "./RegionPage.scss";

// hook
import useAxios from "./../../../hooks/useAxios";

const RegionPage = () => {
  const [regions, setRegions] = useState(null);
  const { axiosCustom } = useAxios();

  useEffect(() => {
    axiosCustom("/region/20/1").then((res) => {
      if (res.data.status === "success") {
        // sorry i couldn't finish on time the next line is just pseudo code
        setRegions(res.data.regions);
      }
    });
  }, [axiosCustom]);

  return (
    <div className="region-page">
      <div className="region-page__top-panel">
        <h3>Region List</h3>

        <Link to="/dashboard/create-region" className="create-btn">
          <span>Create New</span>
        </Link>
      </div>

      {/* pseudo code */}
      {regions?.length > 0 &&
        regions.map(() => {
          // return region row in a table
        })}

      {!regions && (
        <p
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          Sorry no regions were found
        </p>
      )}
    </div>
  );
};

export default RegionPage;
