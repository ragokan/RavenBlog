import React, { createContext, useContext } from "react";
import api from "./utils/api";
import axios from "axios";
import { AlertContext } from "./AlertContext";
import { LoadingContext } from "./LoadingContext";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const { addAlert } = useContext(AlertContext);
  const { setMainLoading } = useContext(LoadingContext);

  api.interceptors.request.use((config) => {
    setMainLoading(true);
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      setMainLoading(false);
      return response;
    },
    (error) => {
      setMainLoading(false);
      if (error.response && error.response.data) {
        addAlert(error.response.data, "danger");
      } else {
        addAlert("Problem happened while trying to connect server, please try again!", "danger");
      }
      throw new axios.Cancel("Error happened!");
    }
  );

  return <ApiContext.Provider>{props.children}</ApiContext.Provider>;
};

export default ApiContextProvider;
