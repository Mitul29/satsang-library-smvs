import baseAPI from "./baseApi";

const OPERATIONS = {
  GLOBAL_SEARCH: "globalSearch",
};

const homeAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    globalSearch: builder.mutation({
      query: ({ params, ...rest }) => ({
        data: { _operation: OPERATIONS.GLOBAL_SEARCH, ...params, ...rest },
      }),
    }),
  }),
});

export const { useGlobalSearchMutation } = homeAPI;
