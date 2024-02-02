// axios
import axios from "axios";

// server url
import { serverUrl } from "./../interfaceData/serverUrl";

const axiosCustom = axios.create({
  baseURL: serverUrl,
});

const useAxios = () => {
  return { axiosCustom };
};

export default useAxios;
