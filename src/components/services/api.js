import axios from "axios";

// const Bais_Api = 'https://192.168.1.65:7164/api';
const Bais_Api = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;


//User Redister 
export const userRegister = (RegisterUser) => {
    return axios.post(`${Bais_Api}/Register`, RegisterUser)
}

//User Log in
export const userLogin = (LoginUser) => {
    return axios.post(`${Bais_Api}/login`, LoginUser)

}

// User Log out 
export const userLogout = () => {
    return axios.post(`${Bais_Api}/logout`)
}

// get User Info 
export const getUserInfo = () => {
    return axios.get(`${Bais_Api}/user`)
}

// Update User Password 
export const updateUserPassword = (user) => {
    return axios.put(`${Bais_Api}/user/updatepassword`, user)
}

//get card Info
export const getCard = () => {
    return axios.get(`${Bais_Api}/HomeSection`)
}

// Upload Record
export const uploadRecord = (formData) => {
    return axios.post(`${Bais_Api}/result`, formData)
}

// get Result Data
export const getResult = () => {
    return axios.get(`${Bais_Api}/result`)
}

//Admin LogOut
export const adminLogout = () => {
    return axios.post(`${Bais_Api}/logout`);
};
// Get All Users



