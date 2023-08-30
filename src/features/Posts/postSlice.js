// create post slice

import { apiSlice } from "../api/apiSlice";

export const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItem: builder.query({
      query: () => "/posts",
      providesTags: (result, error, arg) => ["Posts"],
      keepUnusedDataFor : 60
    }),
    getSingleItem: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, arg) => [{type: "SinglePost", id: arg}],
      keepUnusedDataFor : 60
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "delete",
      }),
      invalidatesTags: (result, error, arg) => ["Posts"],
    }),
    createItem: builder.mutation({
      query: (data) => ({
        url: `/posts`,
        method: "post",
        body: data,
      }),
      invalidatesTags:(result, error, arg) => ["Posts"],
    }),
    updateItem: builder.mutation({
      query: (data) => ({
        url: `/posts/${data.id}`,
        method: "put",
        body: data,
      }),
      invalidatesTags:(result, error, arg) => ["Posts", "SinglePost"],
    }),
  }),
});

export const {
  useGetItemQuery,
  useGetSingleItemQuery,
  useDeleteItemMutation,
  useCreateItemMutation,
  useUpdateItemMutation
} = postSlice;
