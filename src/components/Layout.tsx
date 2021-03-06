import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import ScrollUp from "./ScrollUp";

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}assets/favicon-32x32.png`}
                    sizes="32x32"
                />

                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix("/")}assets/og-image.jpg`}
                />
            </Helmet>
            
            <div className="site-content">
                <Navbar />
                <ScrollUp />
                <div className="main">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default TemplateWrapper;