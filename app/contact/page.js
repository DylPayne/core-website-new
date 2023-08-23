"use client";

import styles from "./contact.module.css";
import sharedStyles from "../sharedStyles.module.css";

import { useRef, useState } from "react";

import { Metadata } from "next";

import { At } from "tabler-icons-react";
import { Phone } from "tabler-icons-react";
import { MapPin } from "tabler-icons-react/dist";
import { Clock } from "tabler-icons-react/dist";
import { Paperclip } from "tabler-icons-react/dist";
import { Face } from "@mui/icons-material";

import { TextInput, Textarea, Button, Alert } from "@mantine/core";
import { useForm } from "@mantine/form";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import ReCAPTCHA from "react-google-recaptcha";

import emailjs from "@emailjs/browser";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clibf75tk04k601ulgi3taijw/master",
  cache: new InMemoryCache(),
});

export const metadata = {
  title: "Core Interiors | Cape Town",
  description:
    "Transform your living space into a stunning oasis with Core Interiors. Our expert team of interior designers offers bespoke solutions to elevate your home or office. Discover our wide range of services, including space planning, furniture selection, and project management. Visit Core Interiors and let us bring your vision to life.",
};

export default function Contact() {
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (recaptcha == null) {
      alert("Please verify that you are not a robot");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_9wzuxpd",
        "template_n3wykjg",
        formRef.current,
        "HM-R-HqXWG4wUcWeS"
      )
      .then((result) => {
        console.log(result);
        setLoading(false);
        formRef.current.reset();
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  };

  const [recaptcha, setRecaptcha] = useState(null);
  const onRecaptchaChange = async (code) => {
    if (!code) {
      return;
    }
    console.log(code);
    setRecaptcha(code);
  };

  return (
    <ApolloProvider client={client}>
      <main className={sharedStyles.main}>
        <h2 className={sharedStyles.title}>Contact Us</h2>
        <div className={styles.formContainer}>
          <div className={styles.formInfo}>
            <h3>Get in touch today!</h3>
            <p>
              Leave us an email and we will get back to you as soon as possible
            </p>
            <div className={sharedStyles.spacerXS} />
            <div className={styles.formInfoRowParent}>
              <div className={styles.formInfoRow}>
                <At size={24} strokeWidth={1} color={"black"} />
                <div>
                  <p className={styles.formInfoRowLabel}>Email</p>
                  <p>info@coreinteriors.co.za</p>
                </div>
              </div>
              <div className={styles.formInfoRow}>
                <Phone size={24} strokeWidth={1} color={"black"} />
                <div>
                  <p className={styles.formInfoRowLabel}>Phone</p>
                  <p>+27 79 316 4345</p>
                </div>
              </div>
              <div className={styles.formInfoRow}>
                <MapPin size={24} strokeWidth={1} color={"black"} />
                <div>
                  <p className={styles.formInfoRowLabel}>Address</p>
                  <p>29 Estmil Road, Diep Rivier</p>
                </div>
              </div>
              <div className={styles.formInfoRow}>
                <Clock size={24} strokeWidth={1} color={"black"} />
                <div>
                  <p className={styles.formInfoRowLabel}>Working Hours</p>
                  <p>Mon to Fri, 8am to 5pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <h3>Leave us a message</h3>
            <form onSubmit={handleSubmit} ref={formRef}>
              <TextInput
                label="Email"
                placeholder="Your email"
                {...form.getInputProps("email")}
                icon={<At size={18} strokeWidth={1} color={"gray"} />}
                radius={0}
                name="reply_to"
              />
              <TextInput
                label="Subject"
                placeholder="Subject"
                {...form.getInputProps("subject")}
                icon={<Paperclip size={18} strokeWidth={1} color={"gray"} />}
                radius={0}
                name="subject"
              />
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps("name")}
                icon={<Face size={18} strokeWidth={1} color={"gray"} />}
                radius={0}
                name="from_name"
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                {...form.getInputProps("message")}
                minRows={4}
                maxRows={8}
                radius={0}
                name="message"
              />
              <div className={sharedStyles.spacerXS} />
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={onRecaptchaChange}
              />
              <div className={sharedStyles.spacerXS} />
              <Button type="submit" loading={loading}>
                Submit
              </Button>
            </form>
            {success && (
              <>
                <div className={sharedStyles.spacerXS} />
                <Alert title="Success" color="green">
                  Your message has been sent successfully!
                </Alert>
              </>
            )}
            {error && (
              <>
                <div className={sharedStyles.spacerXS} />
                <Alert title="Error" color="red">
                  There was an error sending your message. Please try again
                </Alert>
              </>
            )}
          </div>
        </div>
      </main>
    </ApolloProvider>
  );
}
