import React from "react";
import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//Components
import Search from "./Search";
import CustomButton from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const StyledBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const LogoBox = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const LinkContainer = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
`;
//styled is not recognize html tag as a component
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <LinkContainer to={"/"}>
          <StyledBox>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display: "flex" }}>
              <LogoBox style={{ color: "white" }}>
                Explore&nbsp;
                <Box component="span" style={{ color: "yellow" }}>
                  Plus
                </Box>
              </LogoBox>
              <PlusImage src={subURL} alt="sub-logo" />
            </Box>
          </StyledBox>
        </LinkContainer>
        <Search />
        <CustomButton />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
