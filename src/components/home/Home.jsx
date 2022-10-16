import NavBar from "./NavBar";
import Banner from "./Banner";
import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
const Container = styled(Box)`
  padding: 10px;
  background: F2F2F2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts); // this getProducts comming from store.js
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Container>
        <Banner />
      </Container>
    </>
  );
};
export default Home;
