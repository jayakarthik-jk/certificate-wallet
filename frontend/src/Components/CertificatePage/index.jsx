import React from "react";
import { useLocation, useParams } from "react-router-dom";

function CertificatePage() {
  const { id } = useParams();
  console.log(id);
  return <div>CertificatePage</div>;
}

export default CertificatePage;
