// create post slice

import { apiSlice } from "../api/apiSlice";

export const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItem: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getSingleItem: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Posts"],
    }),
    createItem: builder.mutation({
      query: (data) => ({
        url: `/posts`,
        method: "post",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetItemQuery,
  useGetSingleItemQuery,
  useDeleteItemMutation,
  useCreateItemMutation,
} = postSlice;
