import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IRegistrationUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface IRegistrationUserResponse {
  status: number;
  user_id: number;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegistrationUserResponse,IRegistrationUserPayload>({
      query: (payload) => ({
        url: "/registration",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
