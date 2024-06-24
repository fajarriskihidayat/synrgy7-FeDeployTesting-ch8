import { ToastContainer } from "react-toastify";
import RootRoutes from "./routes";
import { useEffect } from "react";
import { getWithExpiry } from "./utils/isExpiryToken";

function App() {
  useEffect(() => {
    getWithExpiry("expiryAuth");
  });

  return (
    <>
      <RootRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
