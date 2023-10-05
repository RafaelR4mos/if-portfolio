import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { socialMedia } from "../../types/userInterface";

import styles from "./Footer.module.css";

interface FooterProps {
  socialMediaLinks?: socialMedia;
}

export function Footer({ socialMediaLinks }: FooterProps) {
  console.log(socialMediaLinks);

  return (
    <footer>
      {socialMediaLinks ? (
        <div className={styles.footerIconContainer}>
          {socialMediaLinks["facebook"] && (
            <a href={socialMediaLinks.facebook} target="_blank">
              <FacebookLogo size={32} alt="facebook logo" />
            </a>
          )}

          {socialMediaLinks["instagram"] && (
            <a href={socialMediaLinks.instagram} target="_blank">
              <InstagramLogo size={32} alt="instagram logo" />
            </a>
          )}

          {socialMediaLinks["linkedin"] && (
            <a href={socialMediaLinks.linkedin} target="_blank">
              <LinkedinLogo size={32} alt="linkedin logo" />
            </a>
          )}

          {socialMediaLinks["github"] && (
            <a href={socialMediaLinks.github} target="_blank">
              <GithubLogo size={32} alt="github logo" />
            </a>
          )}
        </div>
      ) : (
        <div className={styles.footerIconContainer}>
          <span>todos direitos reservados</span>
        </div>
      )}
    </footer>
  );
}
