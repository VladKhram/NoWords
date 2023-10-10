"use client";

import { store } from "@/api/store";
import { FC } from "react";
import { Provider } from "react-redux";

const RootProvider: FC = ({ children }) => {
  return (
    <body>
      <Provider store={store}>{children}</Provider>
    </body>
  );
};

export default RootProvider;
