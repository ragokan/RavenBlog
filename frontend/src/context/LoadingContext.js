import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingContextProvider = (props) => {
  const [mainLoading, setMainLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        mainLoading,
        setMainLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
