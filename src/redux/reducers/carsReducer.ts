import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CarProps, RecommendedProps } from "../../interfaces/interfaces";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1/" }),
  endpoints: (builder) => ({
    getRecommended: builder.query<RecommendedProps[], void>({
      query: () => "2f03cdac-7c37-4042-a597-b81efb5971b5",
    }),
    getCars: builder.query<CarProps[], void>({
      query: () => "4d3d8651-1591-4531-a83e-9b0712af2220",
    }),
  }),
});

export const { useGetRecommendedQuery, useGetCarsQuery } = apiSlice;
