import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

function RouteWrapper() {
  const searchStateManager = useState("");
  return (
    <>
      <Header />
      <Outlet context={searchStateManager} />
    </>
  );
}

export default RouteWrapper;
