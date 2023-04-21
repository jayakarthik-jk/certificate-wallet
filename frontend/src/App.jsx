import { Route, Routes } from "react-router-dom";

import Home from "./Components/HomePage";
import Search from "./Components/SearchPage";
import Importants from "./Components/ImportantsPage";
import About from "./Components/AboutPage";
import SideNavbar from "./Components/Common/SideNavbar";
import CertificatePage from "./Components/CertificatePage";
import UploadPage from "./Components/UploadPage";

function App() {
  return (
    <>
      <SideNavbar />
      <main className="main bg-[--bg-color] pt-24 px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="importants" element={<Importants />} />
          <Route path="about" element={<About />} />
          <Route path="certificate/new" element={<UploadPage />} />
          <Route path="certificate/:id" element={<CertificatePage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
