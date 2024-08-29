"use client";
import React, { createContext } from "react";
import { PHARMA } from "../data";

const PharmaContext = createContext();

export const PharmaContextProvider = ({ children }) => {
  return (
    <PharmaContext.Provider
      value={{
        PHARMA,
      }}
    >
      {children}
    </PharmaContext.Provider>
  );
};

export default PharmaContext;
