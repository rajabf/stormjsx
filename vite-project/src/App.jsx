import React from "react";
import Header from "./components/Header";
import SiteHero from "./components/SiteHero";
import Departments from "./components/Departments";
import SiteMotto from "./components/SiteMotto";
import Popular from "./components/Popular";
import SiteCta from "./components/SiteCta";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-departmentBg font-sfPro">
      <Header />
      <SiteHero />
      <Departments />
      <SiteMotto />
      <Popular />
      <SiteCta />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
