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
  }),
});

export const {
  useCreatePaymentMutation,
  useSuccessPaymentMutation,
  useCancelPaymentMutation,
  useFailPaymentMutation,
} = paymentApi;
