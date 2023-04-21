import { createContext, useContext, useState } from "react";

const CertificateContext = createContext();

CertificateContext.displayName = "Certificate Context";

export const useCertificates = () => useContext(CertificateContext);

export function CertificatesProvider({ children }) {
  const [certificates, setCertificates] = useState(data);
  return (
    <CertificateContext.Provider value={{ certificates, setCertificates }}>
      {children}
    </CertificateContext.Provider>
  );
}

export default CertificateContext;

const data = [
  {
    id: "1",
    name: "general certificate 1",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "general",
    isImportant: true,
  },
  {
    id: "2",
    name: "general certificate 2",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "general",
    isImportant: false,
  },
  {
    id: "3",
    name: "general certificate 3",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "general",
    isImportant: false,
  },
  {
    id: "4",
    name: "personal certificate 1",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "personal",
    isImportant: false,
  },
  {
    id: "5",
    name: "personal certificate 2",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "personal",
    isImportant: false,
  },
  {
    id: "6",
    name: "personal certificate 3",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "personal",
    isImportant: false,
  },
  {
    id: "7",
    name: "professional certificate 1",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "professional",
    isImportant: false,
  },
  {
    id: "8",
    name: "professional certificate 2",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "professional",
    isImportant: true,
  },
  {
    id: "9",
    name: "professional certificate 3",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "professional",
    isImportant: false,
  },
  {
    id: "10",
    name: "other certificate 1",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "others",
    isImportant: true,
  },
  {
    id: "11",
    name: "other certificate 2",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "others",
    isImportant: false,
  },
  {
    id: "12",
    name: "other certificate 3",
    description: "this is a certificate",
    date: "2021-01-01",
    category: "others",
    isImportant: false,
  },
];
