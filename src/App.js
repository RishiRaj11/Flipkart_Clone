import React from 'react'
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material"
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsView from './components/details/DetailsView';
const App = () => {
  return (
    <DataProvider >
      <BrowserRouter >
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailsView />} />
          </Routes>

        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;