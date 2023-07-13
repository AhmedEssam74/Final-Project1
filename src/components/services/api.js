import axios from "axios";

// const Bais_Api = 'http://10.10.12.230:5136/api';
// const Bais_Api = 'http://localhost:5000/api';
const Bais_Api = 'https://dcmotorproject-001-site1.atempurl.com/api'
axios.defaults.withCredentials = true;


//User Redister 
export const userRegister = (RegisterUser) => {
    return axios.post(`${Bais_Api}/Register`, RegisterUser)
}

//User Log in
export const userLogin = (LoginUser) => {
    return axios.post(`${Bais_Api}/login`, LoginUser)
}

//Refresh Token 
export const refreshToken = () => {
    return axios.post(`${Bais_Api}/refresh`)
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

//Delete card 
export const deltecard = (id) => {
    return axios.delete(`${Bais_Api}/admin/delete/${id}`)
}
// Add Card
export const addCard = (card) => {
    return axios.post(`${Bais_Api}/Admin/Home`, card)
}

// Upload Record
export const uploadRecord = (formData) => {
    return axios.post(`${Bais_Api}/result`, formData)
}

// get Result Data
export const getResult = () => {
    return axios.get(`${Bais_Api}/result`)
}

// delete Result
export const deleteresult = (id) => {
    return axios.delete(`${Bais_Api}/result/${id}`)
}

// give a rate
export const giverate = ({ id, rating }) => {
    return axios.put(`${Bais_Api}/result`, id, rating)
}

//Admin LogOut
export const adminLogout = () => {
    return axios.post(`${Bais_Api}/logout`);
};
// Get All Users
export const getAllUsers = () => {
    return axios.get(`${Bais_Api}/admin/users`);
};
//Delete User By ID
export const deleteUserById = (id) => {
    return axios.delete(`${Bais_Api}/admin/users/${id}`);
};

//Get Stauts
export const getStatusData = () => {
    return axios.get(`${Bais_Api}/admin/Status`)
}

// Admin Result 
export const adminResult = () => {
    return axios.get(`${Bais_Api}/admin/result`)
}