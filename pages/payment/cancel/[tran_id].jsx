import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useCancelPaymentMutation } from "@/redux/features/payment/paymentApi";

const CancelPayment = () => {
  const router = useRouter();
  const { tran_id } = router.query;
  const [cancelPayment] = useCancelPaymentMutation();

  useEffect(() => {
    if (tran_id) {
      cancelPayment(tran_id);
    }
  }, [tran_id]);
  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-10 mt-20 bg-white rounded-lg shadow-lg">
        <h2 className="text-red-600 font-bold text-4xl">Payment canceled</h2>
        <Link href="/" className="btn btn-sm mt-10 bg-red-700">
          {" "}
          <IoMdArrowRoundBack /> Home
        </Link>
      </div>
    </div>
  );
};

export default CancelPayment;
