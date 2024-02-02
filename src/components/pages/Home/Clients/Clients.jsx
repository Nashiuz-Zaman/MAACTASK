// styles
import styles from "./Clients.module.scss";

// data
import { clientsContent } from "../../../../interfaceData/homeUiContent";

const Clients = () => {
  const { heading, imagesData } = clientsContent;

  return (
    <div className={styles["clients"]}>
      <h2 className={styles["clients__heading"]}>{heading}</h2>

      <div className={styles["clients__img-container"]}>
        {imagesData?.length > 0 &&
          imagesData.map((el) => {
            return <img key={el.id} src={el.imageSource} alt={el.id} />;
          })}
      </div>
    </div>
  );
};

export default Clients;
