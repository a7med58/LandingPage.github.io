import { Fragment } from "react";
import About from "../About/About";
import CarouselView from "../Carousel/CarouselView";
import Client from "../Client/Client";
import Footer from "../Footer/Footer";
import MyWorkOrder from "../MyWorkOrder/MyWorkOrder";
import Header from "./Header";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Client />
      <MyWorkOrder />
      <About />
      <CarouselView />
      <Footer />
    </Fragment>
  );
};

export default Home;
