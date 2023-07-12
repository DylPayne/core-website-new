import styles from "./about.module.css";
import sharedStyles from "../sharedStyles.module.css";

import { Metadata } from "next";

import Contact from "@/components/contact";

// export const metadata = {
//   title: "Core Interiors | Cape Town",
//   description:
//     "Transform your living space into a stunning oasis with Core Interiors. Our expert team of interior designers offers bespoke solutions to elevate your home or office. Discover our wide range of services, including space planning, furniture selection, and project management. Visit Core Interiors and let us bring your vision to life.",
// };

export default function About() {
  return (
    <main className={styles.main}>
      <h2 className={sharedStyles.title}>About Us</h2>
      <div className={styles.aboutText}>
        <p>
          Our core values of exceptional value, quality & service will be
          delivered from the initial consultation right through to completion of
          your project through continual contact with the company directors. All
          projects are carefully managed ensuring excellent communication &
          consideration to our clients needs - there are no sales consultants on
          commision or subcontracted installers in a rush. As a complete
          in-house company we personally design, manufacture & install all of
          our kitchen & joinery projects. Our factory is located in Diep River /
          Elfindale next to our administration offices and clients are more than
          welcome to visit us at any time. We have showroom displaying various
          finishes, components and worktops. Our recently upgraded software
          programme allows clients to easily visualise their finished project by
          providing photo-realistic 3-D images to all confirmed clients. With
          the wide range of options, materials and products now available we
          consider this to be a vital & valuable step in the design process.
        </p>
        <br />
        <p>
          Our aim is to provide our clients with exceptional service & quality
          at an affordable price. This is achieved by thorough consultation,
          thoughtful design & budget-suited material selection. You will be
          carefully guided through this process, allowing you to make informed
          decisions on all material selection. All projects are carefully
          managed from initial concept through to fabrication and installation
          by our small highly skilled team, ensuring excellent communication and
          consultation with customers throughout the process. Our Workshop
          offers various materials and fittings which are available as well as
          displaying the design quality and workmanship expected of the Core
          team. We collaborate with a team of highly reputable draughtsman,
          builders, plumbers, electricians, decorators and interior designers
          readily available to assist on all projects where required. We also
          offer exceptional appliance packages from a wide range of well-known
          quality brands including SMEG,SAMSUNG & LG.
        </p>
        <br />
        <p>
          For well over a decade operated my own carpentry and cabinetry
          business, formerly known as L & G Interiors - we operated mainly in
          the upper Claremont, Newlands, Rondebosch and Constantia areas
          supplying clients with quality Kitchens, Cabinets, Built-in-cupboards,
          Home Office fitout and bespoke furniture. In 2013 I was joined by my
          son and his wife who returned to South Africa after having completed a
          successful rugby career playing for the Sharks, Swansea and Munster.
          After an extensive rebranding and expansion exercise we changed the
          business name to Core Cabinets & Interiors and register a Private
          Company. We are firmly of the belief that in an industry where service
          is not great we aim to do just that and always walk away having made a
          new friend.
        </p>
      </div>
      <Contact />
    </main>
  );
}
