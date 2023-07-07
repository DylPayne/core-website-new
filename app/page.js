import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "./page.module.css";
import sharedStyles from "./sharedStyles.module.css";

import Contact from "@/components/contact";

import coverPhoto from "../public/kitchen1.jpeg";

const partnerLogos = [
  { alt: "Blanco", src: "/partners/blanco.png" },
  { alt: "Bosch", src: "/partners/bosch.png" },
  { alt: "Caeserstone", src: "/partners/caesterstone.png" },
  { alt: "Grass", src: "/partners/grass.png" },
  { alt: "Miele", src: "/partners/miele.png" },
  { alt: "Neolith", src: "/partners/neolith.png" },
  { alt: "Niemann", src: "/partners/niemann.png" },
  { alt: "Osmo", src: "/partners/osmo.png" },
  { alt: "Rubio Monocoat", src: "/partners/rubio.png" },
  { alt: "Samsung", src: "/partners/samsung.png" },
  { alt: "SenoSA", src: "/partners/senosa.png" },
  { alt: "Siemens", src: "/partners/siemens.png" },
  { alt: "Silestone", src: "/partners/silestone.png" },
  { alt: "smeg", src: "/partners/smeg.png" },
  { alt: "SnoMaster", src: "/partners/snomaster.webp" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cover}>
        <div className={styles.coverTextContainer}>
          <h1>We Create Spaces that Inspire</h1>
          <div className={sharedStyles.spacerXS} />
          <Link href="/portfolio" className={styles.workLink}>
            Our Work
          </Link>
        </div>
      </div>
      <div className={styles.spacerM} />
      <div className={(styles.board1, styles.boardStyles)}>
        <h2>What We Do</h2>
        <div className={styles.spacerM} />
        <div className={styles.whatWeDoContainer}>
          <div className={styles.whatWeDoText}>
            <h3>Kitchens</h3>
            <div className={styles.spacerXS} />
            <p>
              Core Cabinets & Interiors specialise in kitchen designs,
              renovations, kitchen manufacturing and kitchen installations. Our
              kitchens are constructed from the highest quality materials
              available in the country and abroad and we have a large selection
              of countertops, doors and finishes to choose from.
            </p>
            <div className={styles.spacerXS} />
            <div className={styles.whatWeDoLinkContainer}>
              <Link href="/portfolio" className={styles.whatWeDoLink}>
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.whatWeDoImage}>
            <Image
              src={coverPhoto}
              className={styles.gridItemImage}
              alt="What we do"
            />
          </div>
        </div>
        <div className={styles.spacerM} />
        <div
          className={`${styles.whatWeDoContainer} ${styles.reverseColTablet}`}
        >
          <div className={styles.whatWeDoImage}>
            <Image
              src={coverPhoto}
              className={styles.gridItemImage}
              alt="What we do"
            />
          </div>
          <div className={styles.whatWeDoText}>
            <h3>Bathrooms</h3>
            <div className={styles.spacerXS} />
            <p>
              We offer design and layout services and will assist with your
              choice of fittings by accompanying you to our recommended
              suppliers. We specialise in the design, manufacture and
              installations of vanities and bathroom storage units.
            </p>
            <div className={styles.spacerXS} />
            <div className={styles.whatWeDoLinkContainer}>
              <Link href="/portfolio" className={styles.whatWeDoLink}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.spacerM} />
        <div className={styles.whatWeDoContainer}>
          <div className={styles.whatWeDoText}>
            <h3>Bedrooms</h3>
            <div className={styles.spacerXS} />
            <p>
              We specialise in bespoke solutions for unusual spaces maximising
              storage, form and function. Apart from conventional cupboard doors
              we offer an extensive range of sliding door solutions as well as
              all laminates, Veneers, Sprayed satin, High gloss finishes and
              solid timber.
            </p>
            <div className={styles.spacerXS} />
            <div className={styles.whatWeDoLinkContainer}>
              <Link href="/portfolio" className={styles.whatWeDoLink}>
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.whatWeDoImage}>
            <Image
              src={coverPhoto}
              className={styles.gridItemImage}
              alt="What we do"
            />
          </div>
        </div>
      </div>
      <div className={styles.spacerM} />
      <div className={(styles.board2, styles.boardStyles)}>
        <h2>Our Partners</h2>
        <div className={styles.spacerM} />
        <div className={styles.partnerGridContainer}>
          <div className={styles.partnerGrid}>
            {partnerLogos.map((partner) => {
              return (
                <div className={styles.partnerGridItem} key={partner.alt}>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    style={{ objectFit: "contain" }}
                    fill
                    unoptimized
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className={styles.boardStyles}>
        <div className={styles.contactContainer}>
          <div className={styles.contactContent}>
            <h2>Contact us today</h2>
            <div className={styles.spacerXS} />
            <p>Get in touch to remagine your home</p>
            <div className={styles.spacerXS} />
            <Link href="/portfolio" className={styles.workLink}>
              Contact
            </Link>
          </div>
        </div>
      </div> */}
      <Contact />
    </main>
  );
}
