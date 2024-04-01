/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginInformations, setLoginInformations] = useState({
    email: "",
    password: "",
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider value={{ loginInformations, setLoginInformations }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
