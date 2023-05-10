import { useNavigate, useParams } from "react-router-dom";

import Icon from "../Common/Icon";
import { useEffect, useState } from "react";
import {
  downloadCertificate,
  getCertificate,
  toggleImportant,
} from "../../Services/backend";
import { CERTIFICATE_WALLET_BACKEND_URL } from "../../Services/http";

function CertificatePage() {
  const { id } = useParams();

  const [certificate, setCertificate] = useState();
  const [isImportant, setIsImportant] = useState(false);
  const navigate = useNavigate();

  const handleToggleImportant = async () => {
    const updatedCertificate = await toggleImportant(id);
    setIsImportant(updatedCertificate.isImportant);
  };

  const handleDownload = async () => {
    const blob = await downloadCertificate(id);
    if (blob instanceof Error) return alert("Error downloading certificate");
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = certificate.name;
    a.click();
  };

  useEffect(() => {
    const fetchCertificate = async () => {
      const certificate = await getCertificate(id);
      if (!certificate || certificate instanceof Error) return navigate("/");
      setIsImportant(certificate.isImportant);
      setCertificate(certificate);
    };
    fetchCertificate();
  }, []);
  return (
    <div className="page flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[--primary-color]">Certificate</h1>
      <div className=" flex gap-8">
        <div className="card w-1/2 h-96 rounded-lg bg-[--secondary-color] flex-shrink-0 flex justify-center overflow-hidden cursor-pointer">
          {certificate && (
            <img
              src={CERTIFICATE_WALLET_BACKEND_URL + "/" + certificate.thumbnail}
              alt="Certificate Image"
              crossOrigin="anonymous"
            />
          )}
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex gap-4 flex-col">
            <div className="text-2xl font-bold text-[--primary-color]">
              {certificate?.name}
            </div>

            <div className="font-normal">
              {certificate?.category?.name
                ? "Category: " + certificate?.category?.name
                : "No Category"}
            </div>
            <div className="font-normal">
              {certificate?.expiresOn
                ? "Expires on " + certificate?.expiresOn
                : "No Expiry"}
            </div>
            <div className="font-normal">
              {certificate?.createdAt
                ? "Created on " +
                  new Date(certificate?.createdAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="w-fit px-4 py-3 flex justify-center items-center gap-2 bg-[--primary-color] rounded-xl cursor-pointer"
              onClick={handleToggleImportant}
            >
              <div className="text-white">
                {isImportant ? "Important" : "Set Important"}
              </div>
              <Icon name="star" regular={!isImportant} />
            </div>
            <div
              className="w-fit px-4 py-3 flex justify-center items-center gap-2 bg-[--primary-color] rounded-xl cursor-pointer"
              onClick={handleDownload}
            >
              <div className="text-white">Download</div>
              <Icon name="download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificatePage;
