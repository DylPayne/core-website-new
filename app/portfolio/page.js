"use client";

import styles from "./portfolio.module.css";
import sharedStyles from "../sharedStyles.module.css";

import { useState, useEffect } from "react";

import Image from "next/image";

import testImage from "../../public/test.jpg";
import Link from "next/link";

import axios from "axios";

const testData = [
  {
    image: testImage,
    title: "Test Job",
    desc: "When designing a kitchen, it is important to consider the needs of the people who will be using it. If you have a large family, you will need a kitchen with plenty of counter space and storage. If you entertain often, you will want a kitchen with a large dining area. And if you love to cook, you will want a kitchen with all the latest appliances.",
  },
  {
    image: testImage,
    title: "Test Job",
    desc: "When designing a kitchen, it is important to consider the needs of the people who will be using it. If you have a large family, you will need a kitchen with plenty of counter space and storage. If you entertain often, you will want a kitchen with a large dining area. And if you love to cook, you will want a kitchen with all the latest appliances.",
  },
  {
    image: testImage,
    title: "Test Job",
    desc: "When designing a kitchen, it is important to consider the needs of the people who will be using it. If you have a large family, you will need a kitchen with plenty of counter space and storage. If you entertain often, you will want a kitchen with a large dining area. And if you love to cook, you will want a kitchen with all the latest appliances.",
  },
  {
    image: testImage,
    title: "Test Job",
    desc: "When designing a kitchen, it is important to consider the needs of the people who will be using it. If you have a large family, you will need a kitchen with plenty of counter space and storage. If you entertain often, you will want a kitchen with a large dining area. And if you love to cook, you will want a kitchen with all the latest appliances.",
  },
  {
    image: testImage,
    title: "Test Job",
    desc: "When designing a kitchen, it is important to consider the needs of the people who will be using it. If you have a large family, you will need a kitchen with plenty of counter space and storage. If you entertain often, you will want a kitchen with a large dining area. And if you love to cook, you will want a kitchen with all the latest appliances.",
  },
];

const GridItem = (props) => {
  return (
    <div className={styles.gridItem} key={props.key}>
      <Image src={props.image} className={styles.gridItemImage} />
      <p className={styles.gridItemTitle}>{props.client}</p>
      <p className={styles.gridItemDesc}>{props.desc}</p>
      <div className={styles.gridItemLinkParent}>
        <div>
          <Link href="/portfolio" className={styles.gridItemLink}>
            View Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [jobsData, setJobsData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(process.env.NEXT_PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN);
  const getJobsData = async () => {
    try {
      setLoading(true);
      const headers = {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_URL}`,
      };
      const requestBody = {
        query: `query Portfolios {
          portfolios {
            id
            name
            slug
            coverPhoto {
              id
              url
            }
          }
        }`,
      };
      const options = {
        method: "GET",
        url: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clibf75tk04k601ulgi3taijw/master",
        headers,
        data: requestBody,
      };
      const response = await axios(options);
      console.log("RESPONSE FROM AXIOS REQUEST: ", response.data);
      setJobsData(response.data);
    } catch (err) {
      console.log("ERROR: ", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getJobsData();
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={sharedStyles.title}>Our Work</h2>
      <div className={styles.gridParent}>
        {testData.map((job) => {
          return (
            <GridItem
              client={job.title}
              desc={job.desc}
              image={job.image}
              key={job.title}
            />
          );
        })}
      </div>
    </main>
  );
}
