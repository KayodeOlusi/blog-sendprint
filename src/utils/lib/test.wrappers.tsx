import React from "react";
import { BrowserRouter } from "react-router-dom";

type TLayoutProps = "react-router" | "static";

const ReactRouterWrapper = ({ component }: { component: React.ReactNode }) => {
  return <BrowserRouter>{component}</BrowserRouter>;
};

export const getTestLayout = (component: JSX.Element, type?: TLayoutProps) => {
  switch (type) {
    case "react-router":
      return <ReactRouterWrapper component={component} />;
    case "static":
      return component;
    default:
      return component;
  }
};
