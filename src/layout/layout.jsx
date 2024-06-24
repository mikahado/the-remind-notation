import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header'
import Footer from './footer'

export default function Layout({ children, title, type }) {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>

      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Header title={title} type={type} />
      
      <section className="section">
        <div className="columns is-centered">{children}</div>
      </section>
      <Footer/>
    </>
  )
}
