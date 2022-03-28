import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent, TextContent } from "../components/Content";
import { Disqus } from 'gatsby-plugin-disqus';

interface BlogPostTemplateProps {
  id: string;
  content: string;
  contentComponent?: React.ComponentType<any>;
  description?: string;
  title?: string;
  helmet?: any;
  tags?: string[];
  slug: string;
}
export const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  const PostContent = props.contentComponent || TextContent;

  return (
    <section className="section">
      {props.helmet}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {props.title}
            </h1>
            <PostContent content={props.content} />
            {props.tags && props.tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {props.tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <Disqus
              config={{
                url: `https://batukan.me/blog/${props.slug}`,
                identifier: props.id,
                title: props.title
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
        slug={data.fields.slug}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`} - Emre Batukan</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta name="author" content="Emre Batukan" />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
