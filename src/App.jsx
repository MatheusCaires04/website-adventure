import Adventure from "./components/Adventure";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import CLients from "./components/CLients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Memorable from "./components/Memorable";
import Packages from "./components/Packages";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Shop from "./components/Shop";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Adventure />
      <Memorable />
      <Shop />
      <Packages />
      <Reviews />
      <Services />
      <Blogs />
      <Subscribe />
      <CLients />
      <Footer />
    </>
  );
}

export default App;
