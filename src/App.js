import React from 'react'
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material"
import DataProvider from './context/DataProvider';
const App = () => {
  return (
    < >
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>

    </>
  )
}

export default App;