import { Box, Button, Typography, styled } from "@mui/material";
import { useState } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
const Wapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;

  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-item: center;
  }
`;
const CartContainer = styled(Box)`
  display: flex;
`;
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wapper>
      <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>

      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>
      <CartContainer>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </CartContainer>
      {open && <LoginDialog open={open} setOpen={setOpen} />}
    </Wapper>
  );
};
export default CustomButton;
