import axios from "axios";
import AuthService from "./AuthService";

const API = "http://localhost:8080/api/perros";

const config = () => ({
  headers: {
    Authorization: `Bearer ${AuthService.getToken()}`
  }
});


export const getPerros = () => axios.get(API, config());
export const addPerro = (perro) => axios.post(API, perro, config());
export const deletePerro = (id) => axios.delete(`${API}/${id}`, config());
