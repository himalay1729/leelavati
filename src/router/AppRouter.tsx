import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import CurrentIssue from "../pages/CurrentIssue";
import Archive from "../pages/Archive";
import IssueDetail from "../pages/IssueDetail";
import About from "../pages/About";
import Subscribe from "../pages/Subscribe";
import ForAuthors from "../pages/ForAuthors";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function AppRouter() {
  const { i18n } = useTranslation();

  // 🧠 Optional: Automatically switch i18n language when route starts with /or
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/en") && i18n.language !== "en") {
      i18n.changeLanguage("en");
    } else if (!path.startsWith("/en") && i18n.language !== "or") {
      i18n.changeLanguage("or");
    }
  }, [i18n]);

  return (
    <Router>
      <Header />
      {/* <CompanyHeaderMark /> */}

      <main>
        <Routes>
          {/* 🌐 English routes */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/current-issue" element={<CurrentIssue />} />
          <Route path="/en/archive" element={<Archive />} />
          <Route path="/en/issues/:slug" element={<IssueDetail />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/subscribe" element={<Subscribe />} />
          <Route path="/en/for-authors" element={<ForAuthors />} />

          {/* 🌐 Odia routes (mirror the English ones) */}
          <Route path="/" element={<Home />} />
          <Route path="/current-issue" element={<CurrentIssue />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/issues/:slug" element={<IssueDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/for-authors" element={<ForAuthors />} />

        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default AppRouter;
