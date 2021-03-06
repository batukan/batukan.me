import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Disqus } from 'gatsby-plugin-disqus';
import { MDXRenderer } from "gatsby-plugin-mdx";

interface BlogPostTemplateProps {
  id?: string;
  content: string;
  description?: string;
  title?: string;
  helmet?: any;
  tags?: string[];
  slug?: string;
}
export const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  return (
    <section className="section">
      {props.helmet}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {props.title}
            </h1>
            <MDXRenderer>{props.content}</MDXRenderer>
            {props.tags && props.tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {props.tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link 
                        style={{ 
                          backgroundColor: `#8bc34a`, 
                          color: `white`, 
                          margin: `2px 2px 2px 0px`, 
                          borderRadius: `2em`, 
                          borderWidth: `1px`, 
                          padding: `.4em .5em`  }} 
                      to={`/tags/${kebabCase(tag)}/`}>
                        {tag}
                        </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {props.id &&
              <Disqus
                config={{
                  url: props.slug ? `https://batukan.me${props.slug}` : null,
                  identifier: props.id,
                  title: props.title
                }}
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default function BlogPost({ data }) {
  const post = data.mdx;

  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
        slug={post.fields.slug}
        content={post.body}
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
    mdx(id: { eq: $id }) {
      id
      body
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
