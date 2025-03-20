import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/project_page.module.scss";
import redditFilter from "/public/portfolioImages/redditFilters.gif";
import Link from "next/link";

const AdvancedRedditFilters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Advanced Reddit Filters</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="sitePreview.png" />
      </Head>
      <div className="container">
        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.introductionBody}>
            <div className={styles.introductionText}>
              <h1 className={styles.mainHeading}>
                <span className={styles.highlight}>
                  {"Advanced Reddit Filters"}
                </span>
              </h1>

              <h2 className={styles.bigSubheading}>Description</h2>
              <p className={styles.bodyText}>
                {
                  "Advanced Reddit Filters (ARF) is a Chrome Extension that applies various filters to Reddit. \
                  It provides users the ability to block users, subreddits, or even posts containing specific keywords. \
                  The extension even has the ability to nuke entire threads, which blocks every single person that posted or commented on a given thread. \
                  It fully supports both the old and new version of the website, given the popularity of both formats. \
                  "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Context and Motivation</h2>
              <p className={styles.bodyText}>
                {
                  "ARF initially began as a tool only intended for personal use. \
                  Whenever I use Reddit, I prefer to browse r/all to increase the variety of posts I see. \
                  However, r/all is also filled with posts and topics that I am completely uninterested in. \
                  Thus, the ability to block certain subreddits and keywords was very helpful in filtering out the content that I definitely did not want to see. \
                  I got a lot of positive feedback and suggestions for the tool as I showed it to other people. \
                  This led to me build a better UI and add more features like the thread nuke and user block.\
                  "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Architecture</h2>
              <p className={styles.bodyText}>
                {
                  "ARF is a chrome extension that works on the client-side only. \
                  The interface stores user preferences within chrome's local storage, which is used by a content script injected into all Reddit pages. \
                  The content script adds listeners to the DOM and hides posts and comments based on the user's filter settings. \
                  "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Key Challenges</h2>
              <p className={styles.bodyText}>
                {
                  "One of the biggest challenges of ARF was the limitations imposed by the Reddit API. \
                The ideal version of this extension would enable functions like subreddit and user blocks to be stored and handled by Reddit's servers. \
                However, given the low rate limit of the Reddit API free tier, and limitations like a user block limit of 1000 users, many features of ARF would be infeasible to implement using Reddit's API. \
                Thus, ARF was built to function on the client-side only, limiting the scope of the extension, but retaining all its core features.\
                "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Gallery</h2>
              <p className={styles.bodyText}>
                {
                  "Advanced Reddit Features is currently a public chrome extension: you can try it out for yourself! You can also browse the code and view previews below!"
                }
                <br></br>
                <Link
                  target="_blank"
                  href="https://chromewebstore.google.com/detail/advanced-reddit-filters/maaenebojagffbkkipikfahpncchejec"
                >
                  <a target="_blank" rel="noreferrer">
                    Chrome Store Link
                  </a>
                </Link>
                <br></br>
                <Link
                  target="_blank"
                  href="https://github.com/JosephKan3/redditFilters"
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
                  src={redditFilter}
                  alt="AdvancedRedditFilters Demonstration"
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

export default AdvancedRedditFilters;
