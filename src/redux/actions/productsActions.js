import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

const URL = "http://localhost:8000"
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