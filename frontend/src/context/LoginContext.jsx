/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginInformations, setLoginInformations] = useState({
    id: localStorage.getItem("id"),
    email: localStorage.getItem("email"),
  });

  useEffect(() => {
    localStorage.setItem("id", loginInformations.id);
    localStorage.setItem("email", loginInformations.email);
  }, [loginInformations]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider value={{ loginInformations, setLoginInformations }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
