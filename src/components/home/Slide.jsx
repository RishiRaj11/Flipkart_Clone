import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Container = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  text-align: center;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;

const Timer = styled(Box)`
  display: flex;
  padding-left: 10px;
`;

const ViewButton = styled(Button)`
  margin-left: auto;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
const Slide = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Container>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alr="time" width={24} alt="products" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <ViewButton variant="contained">View All</ViewButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="products" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slide;
