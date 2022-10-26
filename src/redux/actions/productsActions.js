import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

const URL = "http://localhost:8000";
export const getProducts = () => async (dispatch) => {
    try {
        //console.log("Before")
        const { data } = await axios.get(`${URL}/products`);
        // console.log("After")
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
        });
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response });
    }
}