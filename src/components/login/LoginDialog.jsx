import React from "react";
import Dialog from "@mui/material/Dialog";
import { TextField, Box, Typography, Button, styled } from "@mui/material";
import { useState } from "react";
import { authenticateSignUp } from "../../service/api.js";
const Container = styled(Box)`
  display: flex;
  height: 81vh;
  width: 90vh;
`;
const Image = styled(Box)`
  height: 82%;
  width: 27%;
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;
  padding: 45px 35px;
`;

const Wapper = styled(Box)`
  flex-derection: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > p,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  color: #fff;
  background: #f8641b;
  height: 48px;
  border-radius: 2px;
  width: 100%;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  color: #2874f0;
  background: #fff;
  height: 48px;
  border-radius: 2px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAcount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const accountInfoInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started",
  },
};

const signUpInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const LoginDialog = (props) => {
  const [accountSetUp, setAccountSetUp] = useState(
    accountInfoInitialValue.login
  );
  const [signup, setSignup] = useState(signUpInitialValue);
  const { open, setOpen } = props;

  const closeDailog = () => {
    setOpen(false);
    setAccountSetUp(accountInfoInitialValue.login);
  };

  const singUpHandler = () => {
    setAccountSetUp(accountInfoInitialValue.signup);
  };

  const inputChangeHandler = (e) => {
    //console.log(e.target.value);
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const response = await authenticateSignUp(signup);
    if (!response) {
      return;
    }
    closeDailog();
    //console.log(user);
  };

  return (
    <>
      <Dialog open={open} onClose={closeDailog}>
        <Container>
          <Image>
            <Typography variant="h5" style={{ color: "#fff" }}>
              {accountSetUp.heading}
            </Typography>
            <Typography style={{ marginTop: 20, color: "#fff" }}>
              {accountSetUp.subheading}
            </Typography>
          </Image>
          {accountSetUp.view === "login" ? (
            <Wapper>
              <TextField
                id="standard-basic"
                label="Enter email/Mobile number"
                variant="standard"
              />

              <TextField
                id="standard-basic"
                label="Enter password"
                variant="standard"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAcount onClick={singUpHandler}>
                New to Flipkart ? Create new account
              </CreateAcount>
            </Wapper>
          ) : (
            <Wapper>
              <TextField
                label="Enter First name"
                variant="standard"
                name="firstname"
                onChange={(e) => inputChangeHandler(e)}
              />
              <TextField
                label="Enter Last name"
                variant="standard"
                onChange={(e) => inputChangeHandler(e)}
                name="lastname"
              />
              <TextField
                label="Enter Username"
                variant="standard"
                onChange={(e) => inputChangeHandler(e)}
                name="username"
              />
              <TextField
                label="Enter email"
                variant="standard"
                name="email"
                onChange={(e) => inputChangeHandler(e)}
              />
              <TextField
                label="Enter password"
                variant="standard"
                name="password"
                onChange={(e) => inputChangeHandler(e)}
              />
              <TextField
                label="Enter Phone number"
                variant="standard"
                name="phone"
                onChange={(e) => inputChangeHandler(e)}
              />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wapper>
          )}
        </Container>
      </Dialog>
    </>
  );
};

export default LoginDialog;
