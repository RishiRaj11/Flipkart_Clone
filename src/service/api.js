import axios from 'axios'

const URL = "http://localhost:8000";

export const authenticateSignUp = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error while connecting ", error);
    }
}