import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface INewPostPayload {
  user_id: number;
  main_text: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPost: builder.query<string>({
        query: (postId) => `/user?post_id=${postId}`,
      }),
    newPostUser: builder.mutation<string,INewPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),
    changeUserPost: builder.mutation<>({
        query: (payload) => ({
          url: "/post",
          method: "PUT",
          body: payload,
        }),
      }),
      deletePost: builder.mutation<>({
        query: (postId) => `/user?post_id=${postId}`({
          url: "/post",
          method: "DELETE",
          body: payload,
        }),
      }),
  }),
});

export const { useNewPostUserMutation, useChangeUserPostMutation, useGetPostQuery } = postApi;
