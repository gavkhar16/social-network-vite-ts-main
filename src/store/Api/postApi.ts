import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IPost {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    user_city: string;
    phone_number: string;
    reg_date: string;
    email: string;
    id: number;
    name: string;
    password: string;
  };
  photos: string[];
  comments: string[];
}
interface IGetPostResponse {
  status: number;
  message: IPost[];
}

interface INewPostPayload {
  user_id: number;
  main_text: string;
}

interface INewPostResponse {
  user_id: number;
  main_text: string;
}

interface IChangeUserPostPayload {
  post_id: number;
  new_text: string;
}

interface IChangeProfileResponse {
  status: number;
  message: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPost: builder.query<IGetPostResponse, null>({
      query: () => `/posts`,
    }),
    newPostUser: builder.mutation<INewPostResponse, INewPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),
    changeUserPost: builder.mutation<
      IChangeProfileResponse,IChangeUserPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "PUT",
        body: payload,
      }),
    }),
    // deletePost: builder.mutation<>({
    //   query: (postId) =>
    //     `/user?post_id=${postId}`({
    //       url: "/post",
    //       method: "DELETE",
    //       body: payload,
    //     }),
    // }),
  }),
});

export const {
  useNewPostUserMutation,
  useChangeUserPostMutation,
  useGetPostQuery, useLazyGetPostQuery
} = postApi;
