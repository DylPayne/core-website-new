"use client";
import styles from "./testimonials.module.css";
import sharedStyles from "../sharedStyles.module.css";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Blockquote } from "@mantine/core";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const query = gql`
  query Testimonials {
    testimonials {
      id
      client
      testimonial
    }
  }
`;

// export const metadata = {
//   title: "Core Interiors | Cape Town",
//   description:
//     "Transform your living space into a stunning oasis with Core Interiors. Our expert team of interior designers offers bespoke solutions to elevate your home or office. Discover our wide range of services, including space planning, furniture selection, and project management. Visit Core Interiors and let us bring your vision to life.",
// };

export default function Testimonials() {
  const client = new ApolloClient({
    uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clibf75tk04k601ulgi3taijw/master",
    cache: new InMemoryCache(),
  });

  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTestimonialData = () => {
    console.log("Fetching data...");

    client
      .query({
        query: query,
      })
      .then((result) => {
        console.log(result.data.testimonials);
        setTestimonialData(result.data.testimonials);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTestimonialData();
  }, []);

  return (
    <ApolloProvider client={client}>
      {loading ? (
        <h2 className={sharedStyles.title}>Loading...</h2>
      ) : (
        <main className={styles.main}>
          <h2 className={sharedStyles.title}>Testimonials</h2>
          <div className={styles.testimonialParent}>
            {/* <p>{testimonialData.testimonial}</p> */}
            {testimonialData.map((testimonial) => (
              <div className={styles.testimonial} key={testimonial.id}>
                {/* <p className={styles.testimonialText}>{testimonial.testimonial}</p>
                <div className={sharedStyles.spacerXS} />
                <p className={styles.testimonialClient}>{testimonial.client}</p>
                <div className={sharedStyles.spacerS} /> */}
                <Blockquote cite={testimonial.client}>
                  {testimonial.testimonial}
                </Blockquote>
              </div>
            ))}
          </div>
        </main>
      )}
    </ApolloProvider>
  );
}
