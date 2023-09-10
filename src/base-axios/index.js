import axios from "axios";
import { REACT_APP_API_URL } from "../config";

export const Axios = axios.create({ baseURL: REACT_APP_API_URL });

export const setupAxios = () => {
  Axios.interceptors.request.use((request) => {
    const sessionId = localStorage.getItem("session");
    if (sessionId) {
      request.data = { ...request.data, _session: sessionId };
    }
    return request;
  });
  Axios.interceptors.response.use(
    (response) => response.data,
    (error) => console.log("HELLO ERROR", error)
  );
};

export const axiosBaseQuery = async (args) => {
  try {
    const result = await Axios({ method: "POST", data: args.data, ...args });

    if (!result || !result.success) {
      throw new Error(result.error?.message || "Something went wrong !!");
    }

    return { data: result.result };
  } catch (error) {
    return { error };
  }
};
