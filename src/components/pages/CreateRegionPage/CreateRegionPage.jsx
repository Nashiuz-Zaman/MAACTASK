// styles
import "./CreateRegionPage.scss";

import useAxios from "./../../../hooks/useAxios";
import useToast from "./../../../hooks/useToast";

const CreateRegionPage = () => {
  const { axiosCustom } = useAxios();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.region.value;
    const res = await axiosCustom.post("/region", { name });

    if (res.data.status === "success") {
      form.reset();
      showToast("Region created", "success");
    }
  };

  return (
    <div className="create-region-page">
      <div className="create-region-page__top-panel">
        <h3>Create Region</h3>
      </div>

      <form className="create-region-page__form">
        <label>Region</label>
        <input name="region" placeholder="Type region" type="text" />

        <button onClick={handleSubmit} type="submit">
          Add Region
        </button>
      </form>
    </div>
  );
};

export default CreateRegionPage;
