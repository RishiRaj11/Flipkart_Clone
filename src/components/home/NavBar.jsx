import {Box,styled, Typography} from "@mui/material";
import { navData } from "../../constrants/data";

const NavContainer=styled(Box)`
display:flex;
margin:55px 130px 0 130px;
justify-content: space-between;
`
const Container=styled(Box)`
padding:12px 8px;
text-align:center;
`
const TextBox=styled(Typography)`
font-size:14px;
`

const NavBar=()=>{
    return (
        <NavContainer>
            {navData.map(data=>(
                <Container >
                    <img src={data.url} alt="nav" style={{width:64}}/>
                    <TextBox>{data.text}</TextBox>
                </Container>
            ))}
        </NavContainer>
    )
}

export default NavBar;