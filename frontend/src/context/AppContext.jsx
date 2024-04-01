/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [toDisplay, setToDisplay] = useState(true);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ toDisplay, setToDisplay }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
