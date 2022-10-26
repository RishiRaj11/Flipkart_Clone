import { imageURL } from "../../constrants/data";
import { Grid, styled } from "@mui/material";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

const MidSectionBanner = () => {
  return (
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
      {imageURL.map((image) => (
        <Grid lg={4} md={4} sm={12} xs={12}>
          <img src={image} alt="image" style={{ width: "100%" }} />
        </Grid>
      ))}
    </Wrapper>
  );
};

export default MidSectionBanner;
