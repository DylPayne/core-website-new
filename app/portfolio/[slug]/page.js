"use client";
import styles from "../portfolio.module.css";
import sharedStyles from "../../sharedStyles.module.css";

import { useState, useEffect } from "react";

import Image from "next/image";
import { Metadata } from "next";

import parse from "html-react-parser";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const query = gql`
  query portfolio($id: ID) {
    portfolio(where: { id: $id }) {
      name
      coverPhoto {
        id
        url
      }
      description {
        html
      }
      images {
        id
        url
      }
    }
  }
`;

// export const metadata = {
//   title: "Core Interiors | Cape Town",
//   description:
//     "Transform your living space into a stunning oasis with Core Interiors. Our expert team of interior designers offers bespoke solutions to elevate your home or office. Discover our wide range of services, including space planning, furniture selection, and project management. Visit Core Interiors and let us bring your vision to life.",
// };

export default function PortfolioDetail({ params }) {
  const client = new ApolloClient({
    uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clibf75tk04k601ulgi3taijw/master",
    cache: new InMemoryCache(),
  });

  const [jobData, setJobData] = useState({});
  const [loading, setLoading] = useState(true);

  const id = params.slug;
  console.log(id);

  // const [html, setHtml] = useState("");
  // useEffect(() => {
  //   setHtml(parse(jobData.description.html));
  // }, [html]);

  const getJobData = () => {
    console.log("Fetching data...");

    client
      .query({
        query: query,
        variables: {
          id: id,
        },
      })
      .then((result) => {
        console.log(result.data.portfolio);
        setJobData(result.data.portfolio);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getJobData();
  }, []);
  useEffect(() => {
    console.log(jobData.images);
  }, [jobData]);

  return (
    <div>
      {loading ? (
        <h2 className={sharedStyles.title}>Loading...</h2>
      ) : (
        <ApolloProvider client={client}>
          <main className={styles.main}>
            <h2 className={sharedStyles.title}>{jobData.name}</h2>
            <div className={styles.jobViewImageParent}>
              <Image
                src={jobData.coverPhoto.url}
                alt={jobData.name}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.jobViewImage}
              />
            </div>
            <div className={sharedStyles.spacerS} />
            <div className={styles.descParent}>
              <div className={styles.desc}>
                {parse(jobData.description.html)}
              </div>
            </div>
            <div className={sharedStyles.spacerS} />
            <div className={styles.galleryParent}>
              {jobData.images.map((image) => {
                return (
                  <div className={styles.galleryImage} key={image.url}>
                    <img src={image.url} alt={jobData.name} />
                  </div>
                );
              })}
            </div>
          </main>
        </ApolloProvider>
      )}
    </div>
  );
}
