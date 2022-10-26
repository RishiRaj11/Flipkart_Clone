import NavBar from "./NavBar";
import Banner from "./Banner";
import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSectionBanner from "../Header/MidSectionBanner";
const Container = styled(Box)`
  padding: 10px;
  background: F2F2F2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts); // this getProducts comming from store.js
  //console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <Slide products={products} title="Deal of the Day" timer={true} />
        <MidSectionBanner />
        <Slide products={products} title="Discount for you" timer={false} />
        <Slide products={products} title="Suggested items" timer={false} />
        <Slide products={products} title="Top Selections" timer={false} />
        <Slide products={products} title="Recommented items" timer={false} />
        <Slide products={products} title="Tranding offers" timer={false} />
        <Slide products={products} title="Seasons top Picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals on accessaries"
          timer={false}
        />
      </Container>
    </>
  );
};
export default Home;
