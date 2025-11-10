import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Editors from "../pages/Editors";
import CurrentIssue from "../pages/CurrentIssue";
import Archives from "../pages/Archives";
import IssueDetail from "../pages/IssueDetail";
import About from "../pages/About";
import Policies from "../pages/Policies";
import Subscribe from "../pages/Subscribe";
import ForAuthors from "../pages/ForAuthors";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// import CompanyHeaderMark from "../components/CompanyHeaderMark";

function AppRouter() {
  const { i18n } = useTranslation();

  // 🧠 Optional: Automatically switch i18n language when route starts with /or
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/or") && i18n.language !== "or") {
      i18n.changeLanguage("or");
    } else if (!path.startsWith("/or") && i18n.language !== "en") {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <Router>
      <Header />
      {/* <CompanyHeaderMark /> */}

      <main>
        <Routes>
          {/* 🌐 English routes */}
          <Route path="/" element={<Home />} />
          <Route path="/current-issue" element={<CurrentIssue />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/issues/:slug" element={<IssueDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/editors" element={<Editors />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/for-authors" element={<ForAuthors />} />

          {/* 🌐 Odia routes (mirror the English ones) */}
          <Route path="/or" element={<Home />} />
          <Route path="/or/current-issue" element={<CurrentIssue />} />
          <Route path="/or/archives" element={<Archives />} />
          <Route path="/or/issues/:slug" element={<IssueDetail />} />
          <Route path="/or/about" element={<About />} />
          <Route path="/or/editors" element={<Editors />} />
          <Route path="/or/policies" element={<Policies />} />
          <Route path="/or/subscribe" element={<Subscribe />} />
          <Route path="/or/for-authors" element={<ForAuthors />} />

          {/* Redirect unknown Odia paths to English or home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default AppRouter;
