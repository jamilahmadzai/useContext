import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  return (
    <AppContext.Provider value={{ item, setItem, list, setList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
