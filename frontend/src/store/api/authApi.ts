import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { env } from 'config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiUrl,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    userAuth: builder.mutation<void, void>({
      query: (body) => ({
        url: '/api/auth/login/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useUserAuthMutation } = authApi;
