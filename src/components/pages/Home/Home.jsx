// component
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import Banner from "./Banner/Banner";
import ProductFeatures from "./ProductFeatures/ProductFeatures";

const Home = () => {
  return (
    <div>
      <section>
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>

      <section>
        <ProductFeatures />
      </section>
    </div>
  );
};

export default Home;
