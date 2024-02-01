// component
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AboutUs from "./AboutUs/AboutUs";
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

      <section>
        <InnerContainer>
          <AboutUs />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
