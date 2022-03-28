import React from "react";
import { Link, graphql } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features, { FeatureGridItem } from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import { CmsImage } from "../types/CdnImage";

interface IndexPageTemplateProps {
  mainpitch?: any,
}
export function IndexPageTemplate(props: IndexPageTemplateProps) {
  return (
    <div>

      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{props.mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{props.mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest Blog Posts
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
