import Card from "../Common/Card";

import { categorize } from "../../Utils/certificates";
import { useCertificates } from "../../Context/Certificates";

function Importants() {
  const { certificates } = useCertificates();

  const displayCertificates = categorize(
    certificates.filter((certificate) => certificate.isImportant)
  );
  return (
    <>
      <h1 className="text-3xl font-bold text-[--primary-color]">
        Important Certificates
      </h1>
      {displayCertificates.length ? (
        displayCertificates.map((category) => (
          <div
            className="container flex flex-col gap-4 py-10"
            key={category.name}
          >
            <h1 className="font-medium text-xl">
              {category.name} ({category.certificates.length})
            </h1>
            <div className="flex gap-4 overflow-scroll">
              {category.certificates.map((certificate) => (
                <Card key={certificate.id} {...certificate} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <h1 className="py-8">Oops... No Importants found</h1>
      )}
    </>
  );
}

export default Importants;
