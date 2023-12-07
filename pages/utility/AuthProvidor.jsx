import { useEffect } from "react";
import { useLoginUserMutation } from "@/redux/features/user/userApi";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/nextjs";
import { setUser } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";

const AuthProvidor = ({ children }) => {
  const { User } = useSelector((state) => state.user);
  const [loginUser, { data: userData, error }] = useLoginUserMutation();
  const { user: sessionUser } = useUser();

  const dispatch = useDispatch();

  // If error
  useEffect(() => {
    if (error) {
      console.warn("Login error: ", error);
    }
  }, [error]);

  // Login
  useEffect(() => {
    function requestForLogin() {
      console.warn("Send Login Request!");
      if (!User && sessionUser) {
        const name = sessionUser.fullName;
        const email = sessionUser.primaryEmailAddress.emailAddress;

        loginUser({ name, email });
      }
    }
    requestForLogin();
  }, [sessionUser]);

  // set data to redux
  useEffect(() => {
    function setUserToRedux() {
      if (!User && userData) {
        dispatch(setUser(userData.user));
      } else {
        dispatch(setUser(null));
      }
    }
    setUserToRedux();
  }, [userData]);

  return <div>{children}</div>;
};

export default AuthProvidor;
