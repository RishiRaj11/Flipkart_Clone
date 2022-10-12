import {Box,Button, Typography,styled} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
const Wapper=styled(Box)`
display:flex;
margin: 0 3% 0 auto;

& > button , & >p, & > div{
    margin-right:40px;
    font-size:16px;
    align-item:center;
}
`
const CartContainer=styled(Box)`
display:flex;
`
const LoginButton= styled(Button)`
color:#2874f0;
background:#FFFFFF;
text-transform:none;
padding: 5px 40px;
box-shadow:none;
font-weight:600;height:32px;
`

const CustomButton=()=>{
    return(
        <Wapper>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>
            <CartContainer>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </CartContainer>
        </Wapper>
    )
}
export default CustomButton;