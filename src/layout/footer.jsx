import React from 'react';
import { Helmet } from 'react-helmet';
import siteConfig from '../../gatsby-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        {/* Any additional meta tags for the footer can be added here */}
      </Helmet>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            &copy;{currentYear} {siteConfig.siteMetadata.title || 'The Remind Notation beta'}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
