import { useGetAllCommentsOnPostQuery } from "@/redux/features/comment/commentApi";
import moment from "moment";
import { useState, useEffect } from "react";
import { useCreatePaymentMutation } from "@/redux/features/payment/paymentApi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Proposal = ({ id, learner }) => {
  const { User } = useSelector((state) => state.user);
  const { data: comments, isError } = useGetAllCommentsOnPostQuery(
    { postId: id },
    { refetchOnMountOrArgChange: true }
  );
  const [createPayment, { data: redirectURL, isLoading, error }] =
    useCreatePaymentMutation();
  const [paymentInfo, setPaymentInfo] = useState(null);
  const router = useRouter();

  const handleApply = (teacherId, price) => {
    if (!User) return alert("Please login first");
    const sendingData = {
      problem_id: id,
      student_id: learner._id,
      tutor_id: teacherId?._id,
      amount: price,
      teacherName: teacherId?.name,
    };
    setPaymentInfo(sendingData);
  };

  // Payment
  const handlePayment = (e) => {
    e.preventDefault();
    createPayment(paymentInfo);
  };

  useEffect(() => {
    if (redirectURL) {
      router.push(redirectURL.url);
    }
  }, [redirectURL]);

  return (
    <div className="space-y-4">
      {paymentInfo ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
          <form onSubmit={handlePayment}>
            <p>
              Tutor: <strong> {paymentInfo.teacherName}</strong>
            </p>
            <p>
              Budget: <strong>{paymentInfo.amount} tk</strong>
            </p>
            <div className=" mt-3 flex gap-3">
              <button
                button="submit"
                className="btn btn-sm bg-blue-600 border-none"
                disabled={isLoading}
              >
                Payment
              </button>
              <button
                button="button"
                onClick={() => setPaymentInfo(null)}
                className="btn btn-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">Proposals</h2>
          {isError && <p className="text-red-500">Error loading proposals</p>}
          {!isError && comments && comments.length === 0 && (
            <p>No proposals available yet.</p>
          )}
          {comments && comments.length > 0 && (
            <ul>
              {comments.map((comment) => (
                <li key={comment._id} className="border p-4 rounded-md mt-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <img
                        src={comment.userId.image || "/default/avatar.jpg"}
                        alt={comment.userId.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <span className="text-lg font-semibold text-blue-500">
                        {comment.userId.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-green-500">
                        {comment.price} tk
                      </span>
                      {learner?._id === User?._id && (
                        <button
                          className="btn btn_sm bg-blue-500 ml-4 rounded-full text-white"
                          onClick={() =>
                            handleApply(comment.userId, comment.price)
                          }
                        >
                          Accept
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{comment.proposal}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {moment(comment.createdAt).fromNow()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Proposal;
