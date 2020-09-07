import React from "react";
import Container from "../container/container";
import styles from "./styles.module.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';

const FooterTop = () => {
  return (
    <div className={styles.FooterTop}>
      <Container>
        <div className={styles.FooterSectionWrapper}>
        <div className={styles.FooterSection}>
            <h4>DENTALNA KLINIKA DENTECH</h4>
            <p>Našu dentalnu kliniku čine stručnjaci s dugogodišnjim iskustvom u svim granama stomatologije. Smješteni smo u 
              srcu Dalmacije – Splitu i s veseljem pomažemo pacijentima iz svih dijelova Hrvatske, Europe i svijeta.</p>
          </div>
          <div className={styles.FooterSection}>
            <h4>Radno vrijeme</h4>
            <p>PON-PET: 08:00 - 20:00</p>
            <p>SUB: 09:30 - 26:00</p>
            <p>NED: ne radimo</p>
          </div>
          <div className={styles.FooterSection}>
            <h4>Kontakt</h4>
            <p>Email: info@dentech</p>
            <p>Tel: 00 385 99 482 7567</p>
            <p>Poljička cesta 26a, 21000, Split</p>
            <SocialMediaIconsReact icon="twitter" url="https://google.com"/>
            <SocialMediaIconsReact icon="instagram" url="https://google.com"/>
            <SocialMediaIconsReact icon="facebook" url="https://google.com"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;
