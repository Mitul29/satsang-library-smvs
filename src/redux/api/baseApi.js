import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../base-axios";

const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

export default baseAPI;
