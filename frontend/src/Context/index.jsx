import { BrowserRouter } from "react-router-dom";
import { CertificatesProvider } from "./Certificates";

function Context({ children }) {
  return (
    <BrowserRouter>
      <CertificatesProvider>{children}</CertificatesProvider>
    </BrowserRouter>
  );
}

export default Context;
