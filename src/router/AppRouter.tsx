import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import CompanyHeaderMark from "../components/CompanyHeaderMark";

function AppRouter() {
  return (
    <Router>
      <Header />
      {/*<CompanyHeaderMark /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current-issue" element={<CurrentIssue />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/issues/:slug" element={<IssueDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/editors" element={<Editors />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/for-authors" element={<ForAuthors />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;
