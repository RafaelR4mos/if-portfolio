import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import styles from "./Footer.module.css";

type socialMediaLink = {
  socialMedia: "github" | "linkedin" | "instagram" | "facebook";
  link: string;
};

interface FooterProps {
  socialMediaLinks?: socialMediaLink[];
}

export function Footer({ socialMediaLinks }: FooterProps) {
  return (
    <footer>
      {socialMediaLinks ? (
        <div className={styles.footerIconContainer}>
          {socialMediaLinks.some(
            (socialMediaLink) => socialMediaLink.socialMedia === "facebook"
          ) && (
            <a href="" target="_blank">
              <FacebookLogo size={32} />
            </a>
          )}

          {socialMediaLinks.some(
            (socialMediaLink) => socialMediaLink.socialMedia === "instagram"
          ) && (
            <a href="" target="_blank">
              <InstagramLogo size={32} />
            </a>
          )}

          {socialMediaLinks.some(
            (socialMediaLink) => socialMediaLink.socialMedia === "linkedin"
          ) && (
            <a href="" target="_blank">
              <LinkedinLogo size={32} />
            </a>
          )}

          {socialMediaLinks.some(
            (socialMediaLink) => socialMediaLink.socialMedia === "github"
          ) && (
            <a href="" target="_blank">
              <GithubLogo size={32} />
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
