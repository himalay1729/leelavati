import Header from "../Header";
import Footer from "../Footer";
import "./layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
