import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout/layout'
import Search from '../components/search'
import '../styles/index.css'
import { DefaultMenuStructure } from '../utils/menu-structure'
import DarkMode from '../components/dark-mode'

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
  `)

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    setTheme(currentTheme || 'light')
  }, [])

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
      <br />
      <div className="block">
        <Search size="medium" showExcerpt={true} />        
        <h1 className="home-title">Remind Notation</h1>
        <h2 className="home-byline">Streamlined Chords: Song Memory Made Easy</h2>
        <div>
            <DarkMode />
          </div>
      </div>
    </Layout>
  )
}
