import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title = "Default Title", description = "Default description", noNavbar = false, noFooter = false }) => {
  return (
    <div>
      {/* Conditional Navbar */}
      {!noNavbar && <Navbar />}
      <div className="min-h-screen flex flex-col overflow-x-hidden p-3 lg:p-6 w-full">
        {/* Metadata for SEO */}
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Conditional Footer */}
        {!noFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
