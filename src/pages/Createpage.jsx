import Confirm from "../component/alert confirm";
import Article from "../component/article";
import Carousel from "../component/carousel";
import Mycomponent from "../component/createProduct";
import Button from "../component/onclick";
import ProductForm from "../component/productname";
import Welcome from "../component/welcome";


const Createpage = () => {
  return (
    <>
      <Welcome />
      <Article />
      <Mycomponent/>
      <Confirm />
      <Carousel />
    </>
  );
}


export default Createpage;