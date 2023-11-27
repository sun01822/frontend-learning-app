import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSuccessPaymentMutation } from "@/redux/features/payment/paymentApi";
const Success = () => {
  const router = useRouter();
  const { problem_id } = router.query;
  const [successPayment, { data, isLoading }] = useSuccessPaymentMutation();

  useEffect(() => {
    if (problem_id) {
      successPayment(problem_id);
    }
  }, [problem_id]);

  useEffect(() => {
    if (data) {
      console.log("Success data:  ", data);
      router.push(`/conversation/${data?.transaction_id}`);
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-10 mt-20 bg-white rounded-lg shadow-lg">
        <h2 className="text-green-600 font-bold text-4xl">Payment Success</h2>
        {isLoading && <p>Redirecting...</p>}
      </div>
    </div>
  );
};

export default Success;
