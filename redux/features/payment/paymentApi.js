import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create payment
    createPayment: builder.mutation({
      query: (body) => ({
        url: "/payment",
        method: "POST",
        body,
      }),
    }),
    // success payment
    successPayment: builder.mutation({
      query: (tran_id) => ({
        url: `/payment/success/${tran_id}`,
        method: "PATCH",
      }),
    }),
    // cancel payment
    cancelPayment: builder.mutation({
      query: (tran_id) => ({
        url: `/payment/cancel/${tran_id}`,
        method: "DELETE",
      }),
    }),
    // fail payment
    failPayment: builder.mutation({
      query: (tran_id) => ({
        url: `/payment/fail/${tran_id}`,
        method: "DELETE",
      }),
    }),
    // get conversations
    getConversations: builder.query({
      query: (user_id) => ({
        url: `/payment/conversations/${user_id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useCreatePaymentMutation,
  useSuccessPaymentMutation,
  useCancelPaymentMutation,
  useFailPaymentMutation,
} = paymentApi;
