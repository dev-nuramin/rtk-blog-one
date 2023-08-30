import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create api slice

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  tagTypes: ["Posts", "SinglePost"],
  endpoints: (builder) => ({}),
});


