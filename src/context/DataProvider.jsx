import React, { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext(null);

const DataProvider = () => {
  const [account, setAccount] = useState("");

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    ></DataContext.Provider>
  );
};

export default DataProvider;
