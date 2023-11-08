import axios from "axios";

const instance = axios.create({
  baseURL: "https://online-group-study-server-puce.vercel.app/",
  withCredentials: true,
}); 
const useAxios = () => {
    return instance;
};

export default useAxios;