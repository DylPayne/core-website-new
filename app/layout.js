"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import { useRouter } from "next/navigation";

import logo from "../public/core_logo.png";
import logoWhite from "../public/core_logo_white.png";

import styles from "./layout.module.css";

import { MantineProvider } from "@mantine/core";

import { createGetInitialProps } from "@mantine/next";

const links = [
  { label: "About", link: "/about" },
  { label: "Our Work", link: "/portfolio" },
  { label: "Testimonials", link: "/testimonials" },
  // { label: "Team", link: "/team" },
];

export default function RootLayout({ children }) {
  const getInitialProps = createGetInitialProps();

  // Opening and closing menu
  const [menuState, setMenuState] = useState(styles.menuContainerClosed);
  const handleMenuClick = () => {
    if (menuState == styles.menuContainerClosed) {
      setMenuState(styles.menuContainerOpen);
    } else {
      setMenuState(styles.menuContainerClosed);
    }
  };

  // Navigating when clicking logo
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/ico/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/ico/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/ico/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="images/x-icon"
        sizes="any"
        href="/ico/favicon.ico"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <MantineProvider> */}
      <body className={styles.body}>
        <div className={styles.workInProgress}>
          <p>Site under construction</p>
        </div>
        <header className={styles.header}>
          {/* LOGO --------------------------- */}
          <div
            className={styles.logoContainer}
            onClick={() => handleLogoClick()}
          >
            <div className={styles.logo}>
              <Image
                src={logo}
                alt="Core Interiors logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          {/* LINKS --------------------------- */}
          <div className={styles.linksContainer}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.link}>
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CONTACT ------------------------- */}
          <div className={styles.contactContainer}>
            <Link href="/contact">
              <InstagramIcon className={styles.contactIcon} />
            </Link>
            <Link href="/contact">
              <FacebookIcon className={styles.contactIcon} />
            </Link>
            <Link href="/contact" className={styles.contactUs}>
              Contact Us
            </Link>
          </div>
          {/* MENU BUTTON --------------------- */}
          <div className={styles.openMenu}>
            <button onClick={() => handleMenuClick()}>
              {menuState == styles.menuContainerClosed ? (
                <MenuIcon />
              ) : (
                <CloseIcon />
              )}
            </button>
          </div>
        </header>
        <div className={menuState} onClick={handleMenuClick}>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.label}>
                  <Link href={link.link}>{link.label}</Link>
                </li>
              );
            })}
            <div className={styles.contactContainerMobile}>
              <div>
                <Link href="/contact">
                  <InstagramIcon className={styles.contactIconMobile} />
                </Link>
                <Link href="/contact">
                  <FacebookIcon className={styles.contactIconMobile} />
                </Link>
              </div>
              <Link href="/contact" className={styles.contactUs}>
                Contact Us
              </Link>
            </div>
          </ul>
        </div>
        {children}
        <div className={styles.footer}>
          <div
            className={styles.logoContainer}
            onClick={() => handleLogoClick()}
          >
            <div className={styles.logo}>
              <Image
                src={logoWhite}
                alt="Core Interiors logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          {/* LINKS --------------------------- */}
          <div className={styles.linksContainerFooter}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.link}>
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CONTACT ------------------------- */}
          <div className={styles.contactContainer}>
            <Link href="/contact">
              <InstagramIcon className={styles.contactIcon} />
            </Link>
            <Link href="/contact">
              <FacebookIcon className={styles.contactIcon} />
            </Link>
            <Link href="/contact" className={styles.contactUs}>
              Contact Us
            </Link>
          </div>
        </div>
      </body>
      {/* </MantineProvider> */}
    </html>
  );
}
