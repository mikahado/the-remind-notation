import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout/layout';
// import NoteList from '../components/note-list';
import Search from '../components/search';
import '../styles/index.css';
import { DefaultMenuStructure, MenuRoot } from '../utils/menu-structure';

export default function Home() {

  const data = useStaticQuery(graphql`
    query HomeQuery {
      homeNote: mdx(frontmatter: { slug: { eq: "home" } }) {
        body
        fields {
          title
          date
        }
        frontmatter {
          tags
          artist
        }
      }
      notes: allMdx(
        filter: { fields: { visibility: { eq: "public" } } }
        limit: 5
        sort: { fields: fields___date, order: DESC }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
              title
              date
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  let tagList = DefaultMenuStructure('tag-list');
  tagList.push({
    // Add a link to a page that shows all tags.
    type: 'page',
    item: 'tags',
    title: '...',
    liClassName: 'pill',
  });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    };

    document.body.addEventListener('keypress', handleKeyPress);

    return () => {
      document.body.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return data.homeNote ? (
    <Layout title={data.homeNote.fields.title} type="home">
      <div className="column is-half">
        <div className="note-area">
          <h1 className="note-title">{data.homeNote.fields.title}</h1>
          <div className="note-content">
            <MDXRenderer>{data.homeNote.body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Layout title="Home" type="home">
      <div className="column is-half">
        <div className="logo-container">
          <img class="trn-lead-logo-main" src="img/logo-main.svg" alt="Logo"  />
        </div>

        <div className="block">
          <Search size="medium" showExcerpt={true} />
        </div>
      </div>
    </Layout>
  );
}
