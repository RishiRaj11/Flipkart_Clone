import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productsActions";
import { Box } from "@mui/material";

const DetailsView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, product] = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, loading, product]);
  return (
    <Box>
      {product && (
        <Box>
          <Box>{product.title.shortTitle} </Box>
          <Box> </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailsView;
