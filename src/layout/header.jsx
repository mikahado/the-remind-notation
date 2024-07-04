import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { startCase, camelCase } from 'lodash'
import siteConfig from '../../gatsby-config'
import Search from '../components/search'
import {
  DefaultMenuStructure,
  MenuItemPage,
  MenuItemText,
  MenuItemNote,
  MenuItemTag,
  MenuItemExternalLink,
} from '../utils/menu-structure'



// import DarkMode from '../components/dark-mode'

export default function Header({ title, type, description }) {
  const menu = DefaultMenuStructure('header')
  const pageTitle =
    (siteConfig.siteMetadata.title || 'The Remind Notation beta') +
    (title ? ` : ${title}` : '')

  const handleHamburgerMenuClick = e => {
    const target_id = e.currentTarget.getAttribute('data-target')
    const target = document.getElementById(target_id)

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    e.currentTarget.classList.toggle('is-active')
    target.classList.toggle('is-active')
  }


  return (
    <>
      <Helmet>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={siteConfig.siteMetadata.title} property="og:site_name" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400;1,600&amp;display=swap"
          rel="stylesheet"
        />
        <meta content={title ? title : pageTitle} property="og:title" />
        {description ? (
          <meta content={description} property="og:description" />
        ) : null}

        {type === 'note' ? (
          <meta content="article" property="og:type"></meta>
        ) : (
          <meta content="website" property="og:type"></meta>
        )}

        <title>{pageTitle}</title>

        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link
          rel="icon"
          href="/img/favicon.png"
          type="image/png"
          sizes="16x16"
        />
        {/*
          These are included using gatsby-browser.js - if I include these like shown here, there is a horrible FOUC
        <link href="/css/style.css" rel="stylesheet" media="all" className="default" />
        <link href="/css/main.css" rel="stylesheet" media="all" className="default" />
        <link href="/css/custom.css" rel="stylesheet" media="all" className="default" />
        <link href="/css/Util.css" rel="stylesheet" media="all" className="default" />
        */}
      </Helmet>

      <nav
        className="navbar is-transparent"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">

          <svg
              width="32"
              height="32"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              className="trn-lead-logo-small"
          >
              <circle cx="40" cy="40" r="40" fill="#18181C" />

              <path
    id="movingPath"
    d="M0 40 
       C 10 10, 20 70, 30 40
       C 40 20, 50 60, 60 40
       C 70 15, 80 65, 90 40
       C 100 5, 110 75, 120 40
       C 130 10, 140 70, 150 40
       C 160 25, 170 55, 180 40
       C 190 15, 200 65, 210 40
       C 220 20, 230 60, 240 40
       C 250 10, 260 70, 270 40
       C 280 20, 290 60, 300 40
       C 310 15, 320 65, 330 40
       C 340 5, 350 75, 360 40
       C 370 10, 380 70, 390 40
       C 400 25, 410 55, 420 40
       C 430 15, 440 65, 450 40
       C 460 20, 470 60, 480 40
       C 490 10, 500 70, 510 40
       C 520 15, 530 65, 540 40
       C 550 5, 560 75, 570 40
       C 580 10, 590 70, 600 40
       C 610 25, 620 55, 630 40
       C 640 15, 650 65, 660 40
       C 670 20, 680 60, 690 40
       C 700 10, 710 70, 720 40
       C 730 15, 740 65, 750 40
       C 760 5, 770 75, 780 40
       C 790 10, 800 70, 810 40
       C 820 25, 830 55, 840 40
       C 850 15, 860 65, 870 40
       C 880 20, 890 60, 900 40
       C 910 10, 920 70, 930 40
       C 940 15, 950 65, 960 40
       C 970 5, 980 75, 990 40
       C 1000 10, 1010 70, 1020 40
       C 1030 25, 1040 55, 1050 40
       C 1060 15, 1070 65, 1080 40
       C 1090 20, 1100 60, 1110 40
       C 1120 10, 1130 70, 1140 40
       C 1150 15, 1160 65, 1170 40
       C 1180 5, 1190 75, 1200 40
       C 1210 10, 1220 70, 1230 40
       C 1240 25, 1250 55, 1260 40
       C 1270 15, 1280 65, 1290 40
       C 1300 20, 1310 60, 1320 40
       C 1330 10, 1340 70, 1350 40
       C 1360 15, 1370 65, 1380 40
       C 1390 5, 1400 75, 1410 40
       C 1420 10, 1430 70, 1440 40
       C 1450 25, 1460 55, 1470 40
       C 1480 15, 1490 65, 1500 40
       C 1510 20, 1520 60, 1530 40
       C 1540 10, 1550 70, 1560 40
       C 1570 15, 1580 65, 1590 40
       C 1600 5, 1610 75, 1620 40
       C 1630 10, 1640 70, 1650 40
       C 1660 25, 1670 55, 1680 40
       C 1690 15, 1700 65, 1710 40
       C 1720 20, 1730 60, 1740 40
       C 1750 10, 1760 70, 1770 40
       C 1780 15, 1790 65, 1800 40"
    stroke="#00FF00"
    stroke-width="3"
    fill="none"
/>
          </svg>



            <h4>{siteConfig.siteMetadata.title || 'The Remind Notation beta'}</h4>
          </Link>
          {/* <div className="navbar-item navbar-dark-mode__mobile is-hidden-tablet">
            <DarkMode />
          </div> */}
          <button
            className="navbar-burger button-link"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-main"
            onClick={handleHamburgerMenuClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className="navbar-menu" id="navbar-main">
          <div className="navbar-start">
            {menu.map((item, index) => {
              return item.menu ? (
                <span key={index} className="navbar-item dropdown">
                  <Link
                    to={`/${item.item}`}
                    id={`dropdown-${item.item}`}
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.title ? item.title : startCase(camelCase(item.item))}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby={`dropdown-${item.item}`}
                  >
                    {item.menu.map((subItem, subIndex) => {
                      return (
                        <MenuItem
                          className="navbar-item"
                          item={subItem}
                          key={subIndex}
                        />
                      )
                    })}
                  </div>
                </span>
              ) : (
                <MenuItem className="navbar-item" item={item} key={index} />
              )
            })}
          </div>
          <div className="navbar-end is-hidden-mobile">
            {/* <div className="navbar-item">
              <Search size="small" showExcerpt={false} />
            </div> */}
            {/* <div className="navbar-item">
              <DarkMode />
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}

function MenuItem({ item, className }) {
  let itm
  if (item.type === 'page')
    itm = <MenuItemPage item={item} className={className} />
  else if (item.type === 'tag')
    itm = <MenuItemTag item={item} className={className} />
  else if (item.type === 'note')
    itm = <MenuItemNote item={item} className={className} />
  else if (item.type === 'link')
    itm = <MenuItemExternalLink item={item} className={className} />
  else if (item.type === 'text')
    itm = <MenuItemText item={item} className={className} />

  return itm
}
