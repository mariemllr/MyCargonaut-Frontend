/* eslint-disable import/no-extraneous-dependencies */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../App";

export function getToken() {
  return Cookies.get("token");
}

const CHECK_INTERVAL = 5 * 60 * 1000;

export const useIsLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const isLoggedInState = useSelector(
    (state: RootState) => state.user.isLoggedIn
  );

  useEffect(() => {
    const checkIfTokenExists = () => {
      const token = getToken();
      setLoggedIn(token !== undefined);
    };
    checkIfTokenExists();
    const interval = setInterval(checkIfTokenExists, CHECK_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => setLoggedIn(isLoggedInState ?? false), [isLoggedInState]);

  return loggedIn;
};
