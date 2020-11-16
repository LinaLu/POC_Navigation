import React from "react";
import { Routes } from "../Routes";

import { AuthProvider } from "./Auth/AuthProvider";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes></Routes>
    </AuthProvider>
  );
};
