"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

import React from "react";
const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [theme, setTheme] = useState(true); // true = dark
  const value = {
    user,
    setUser,
    theme,
    setTheme,
  };
  const checkUser = async () => {
    const userInfo = await JSON.parse(localStorage.getItem("user"));
    setUser(userInfo);
    if (!userInfo) {
      router.push("/");
      return;
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useContextStates = () => useContext(UserContext);

export default ContextProvider;
