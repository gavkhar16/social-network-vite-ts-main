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
interface IGetPostListResponse {
  status: number;
  message: IPost[];
}

// interface INewPostPayload {
//   user_id: number;
//   main_text: string;
// }

interface IGetPostByIdResponse {
  status: number;
  message: IPost;
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
    getPostList: builder.query<IGetPostListResponse, null>({
      query: () => `/posts`,
    }),
    getPostListById: builder.query<IGetPostByIdResponse, string>({
      query: (postId) => `post?post_id=${postId}`, 
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

export const { useGetPostListQuery, useLazyGetPostListByIdQuery } = postApi;
