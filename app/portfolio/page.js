"use client";

import styles from "./portfolio.module.css";
import sharedStyles from "../sharedStyles.module.css";

import { useState, useEffect } from "react";

import Image from "next/image";

import { Metadata } from "next";
import Link from "next/link";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const metadata = {
  title: "Core Interiors | Cape Town",
  description:
    "Transform your living space into a stunning oasis with Core Interiors. Our expert team of interior designers offers bespoke solutions to elevate your home or office. Discover our wide range of services, including space planning, furniture selection, and project management. Visit Core Interiors and let us bring your vision to life.",
};

const GridItem = (props) => {
  return (
    <div className={styles.gridItem} key={props.key}>
      <Image
        src={props.image}
        alt={props.desc}
        width={0}
        height={0}
        sizes="100vw"
        className={styles.gridItemImage}
      />

      <p className={styles.gridItemTitle}>{props.client}</p>
      <p className={styles.gridItemDesc}>{props.desc}</p>
      <div className={styles.gridItemLinkParent}>
        <div>
          <Link
            href={"/portfolio/" + props.slug}
            className={styles.gridItemLink}
          >
            View Job
          </Link>
        </div>
      </div>
    </div>
  );
};

const client = new ApolloClient({
  uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clibf75tk04k601ulgi3taijw/master",
  cache: new InMemoryCache(),
});

export default function Portfolio() {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const client = new ApolloClient({
    uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clibf75tk04k601ulgi3taijw/master",
    cache: new InMemoryCache(),
  });

  const getJobsData = () => {
    console.log("Fetching data...");

    client
      .query({
        query: gql`
          query Portfolios {
            portfolios {
              id
              name
              slug
              description {
                text
              }
              coverPhoto {
                id
                url
              }
            }
          }
        `,
      })
      .then((result) => {
        console.log(result.data.portfolios);
        setJobsData(result.data.portfolios);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getJobsData();
  }, []);

  return (
    <ApolloProvider client={client}>
      <main className={styles.main}>
        <h2 className={sharedStyles.title}>Our Work</h2>
        <div className={styles.gridParent}>
          {jobsData.map((job) => {
            return (
              <div key={job.name}>
                <GridItem
                  client={job.name}
                  desc={job.description.text}
                  image={job.coverPhoto.url}
                  slug={job.id}
                />
              </div>
            );
          })}
        </div>
      </main>
    </ApolloProvider>
  );
}
