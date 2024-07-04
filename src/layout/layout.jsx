import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header'
import Footer from './footer'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */



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
