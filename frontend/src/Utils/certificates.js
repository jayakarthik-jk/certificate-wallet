export const filter = (searchText, certificates) => {
  const filteredCertificates = certificates.filter((certificate) =>
    certificate.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredCertificates;
};

export const categorize = (certificates) => {
  const categories = Object.entries(
    certificates.reduce((acc, certificate) => {
      const { category } = certificate;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(certificate);
      return acc;
    }, {})
  ).map(([name, certificates]) => ({ name, certificates }));
  return categories;
};

export const sort = (certificates) => {
  const sortedCertificates = [...certificates];
  sortedCertificates.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortedCertificates;
};

export const toggleImportant = (id, certificates) => {
  const updatedCertificates = certificates.map((certificate) => {
    if (certificate.id === id) {
      return { ...certificate, important: !certificate.important };
    }
    return certificate;
  });
  return updatedCertificates;
};

export default {
  filter,
  categorize,
  sort,
};
