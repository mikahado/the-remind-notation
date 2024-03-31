import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout/layout';
import NoteList from '../components/note-list';
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
          <svg
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
            className="trn-lead-logo-main"
          >
            <circle cx="40" cy="40" r="40" fill="#262626" />
            <path
              d="M0 40 
                C 15 10, 25 25, 35 40
                S 55 55, 60 40
                S 70 10, 80 40"
              stroke="#00FF00"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="block">
          <Search size="medium" showExcerpt={true} />
        </div>
      </div>
    </Layout>
  );
}
