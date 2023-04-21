import { useState } from "react";

import Card from "../Common/Card";
import Icon from "../Common/Icon";
import { NavLink as Link } from "react-router-dom";
import Searchbar from "./Searchbar";

import { categorize, filter } from "../../Utils/certificates";
import { useCertificates } from "../../Context/Certificates";

function Home() {
  const { certificates } = useCertificates();
  const [searchQuery, setSearchQuery] = useState("");

  const displayCertificates = categorize(filter(searchQuery, certificates));

  return (
    <>
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl font-bold text-[--primary-color]">
          Welcome Back Ezhil
        </h1>
        <Searchbar onSearch={setSearchQuery} value={searchQuery} />
      </div>

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
              <Card type="new" category={category.name} />
            </div>
          </div>
        ))
      ) : (
        <h1 className="py-8">No certificates found</h1>
      )}

      <Link to="/certificate/new">
        <div className="fixed bottom-5 right-5 w-10 h-10 flex justify-center items-center bg-[--primary-color] rounded-[35%] icon-hop">
          <Icon name="add" />
        </div>
      </Link>
    </>
  );
}

export default Home;
