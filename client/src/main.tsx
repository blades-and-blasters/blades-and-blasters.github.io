import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
if (sessionStorage.redirect ) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.location.href = redirect;
}
createRoot(document.getElementById("root")!).render(<App />);
