// component
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import Faq from "./Faq/Faq";

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
        <AboutUs />
      </section>

      <section>
        <Faq />
      </section>
    </div>
  );
};

export default Home;
