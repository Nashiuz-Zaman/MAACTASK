// component
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import Faq from "./Faq/Faq";
import Clients from "./Clients/Clients";

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

      <section>
        <InnerContainer>
          <Clients />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
