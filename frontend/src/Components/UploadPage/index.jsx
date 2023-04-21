import React from "react";
import { useLocation } from "react-router-dom";

function UploadPage() {
  const category = new URLSearchParams(useLocation().search).get("category");
  console.log(category);
  return <div>UploadPage</div>;
}

export default UploadPage;
