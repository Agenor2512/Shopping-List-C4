/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [userInformations, setUserInformations] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RegisterContext.Provider value={{ userInformations, setUserInformations }}>
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContext;
