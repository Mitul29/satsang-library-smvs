import baseAPI from "./baseApi";

const AUTH_OPERATIONS = {
  LOGIN: "login",
};

const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data, ...rest }) => ({
        data: { _operation: AUTH_OPERATIONS.LOGIN, ...data, ...rest },
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
