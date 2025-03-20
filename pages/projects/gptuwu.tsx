import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/project_page.module.scss";
import gptuwu from "/public/portfolioImages/gptuwu.gif";
import Link from "next/link";

const GPTuwu: NextPage = () => {
  return (
    <>
      <Head>
        <title>GPTuwu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="sitePreview.png" />
      </Head>
      <div className="container">
        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.introductionBody}>
            <div className={styles.introductionText}>
              <h1 className={styles.mainHeading}>
                <span className={styles.highlight}>{"GPTuwu"}</span>
              </h1>

              <h2 className={styles.bigSubheading}>Description</h2>
              <p className={styles.bodyText}>
                {
                  "GPTuwu is a fun little extension that replaces the default ChatGPT icon with a gif of a cute little cat. \
                  "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Context and Motivation</h2>
              <p className={styles.bodyText}>
                {
                  "ChatGPT can often be both verbose and stupid. Replacing the ChatGPT icon with a gif of a yapping little cat just seemed natural.\
                  While this extension wasn't necessarily meant to solve any major problems, I can personally say that using it makes me more patient with ChatGPT when it gets confused and wastes my time. \
                  There's something about the image that makes you smirk instead of getting frustrated when ChatGPT messes up, and that's all the justification I needed to make it.\
                  "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Architecture</h2>
              <p className={styles.bodyText}>
                {
                  "GPTuwu is a simple chrome extension that injects a content script that searches for the ChatGPT icon and replaces the image. \
                  "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Key Challenges</h2>
              <p className={styles.bodyText}>
                {
                  "At a first glance, this chrome extension might seem very simple to build. \
                However, I actually ran into a couple issues when making it, caused by conflicting listeners and quirks of the different web frameworks that ChatGPT runs on. \
                When a chat is first started, the user's dialogue appears first. \
                However, for about a second, the user's dialogue is actually initially loaded as a ChatGPT's dialogue before being replaced by the user. \
                This caused the extension to modify the incorrect image. Similar conflicts with overlapping event listeners meant I had to carefully avoid conflicts to properly create the extension.\
                "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Gallery</h2>
              <p className={styles.bodyText}>
                {
                  "GPTuwu is not currently a published extension, but you can also browse and load the code yourself, or view the previews below!"
                }
                <br></br>
                <Link
                  target="_blank"
                  href="https://github.com/JosephKan3/GPTuwu"
                >
                  <a target="_blank" rel="noreferrer">
                    Github Link
                  </a>
                </Link>
              </p>
            </div>
            <div className={styles.HeroWrapper}>
              <div className={styles.HeroImageWrapper}>
                <Image
                  className={styles.HeroImage}
                  src={gptuwu}
                  alt="GPTuwu Demonstration"
                  layout="responsive"
                  priority={true}
                />
              </div>
              <div className={styles.glowWrapper}>
                <div className={styles.glow}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GPTuwu;
