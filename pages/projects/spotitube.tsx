import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/project_page.module.scss";
import spotitube from "/public/portfolioImages/spotitube.jpg";
import Link from "next/link";

const Spotitube: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotitube</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="sitePreview.png" />
      </Head>
      <div className="container">
        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.introductionBody}>
            <div className={styles.introductionText}>
              <h1 className={styles.mainHeading}>
                <span className={styles.highlight}>{"Spotitube"}</span>
              </h1>

              <h2 className={styles.bigSubheading}>Description</h2>
              <p className={styles.bodyText}>
                {
                  "Spotitube is a Youtube to Spotify playlist converter. \
                  It works by allowing users to instantly load their private Youtube playlists onto the app. \
                  From there, the app converts each song into its Spotify equivalent, and enables users to edit the playlist and handle any failed matches. \
                  Finally, with the push of a button, the app saves the final playlist to Spotify!"
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Context and Motivation</h2>
              <p className={styles.bodyText}>
                {
                  "Growing up as a kid, I didn't have a lot of money to spend. \
                  Since I couldn't afford to pay for Spotify, I mainly used Youtube to listen to music and store my playlists. \
                  In 2019, I finally decided to switch over to Spotify. However, I had countless playlists with hundreds of songs on Youtube. \
                  Transferring them over would've taken hours, if not days. \
                  Instead of going through the slow and mundane process of converting each playlist, I decided to make Spotitube!"
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Architecture</h2>
              <p className={styles.bodyText}>
                {
                  "Spotitube actually had multiple iterations, each marking my improvement as a software engineer. \
                  It started out as a purely front-end React application that handled Youtube and Spotify OAuth flows in a dangerous manner. \
                  Youtube eventually dropped support for the library that I was using, forcing me to adapt. However, by that point, I had learned client-server architecture. \
                  Thus, I rebuilt Spotitube, overhauling the code structure, UI, and most importantly, creating a back-end server built with Flask to handle OAuth in a secure fashion. \
                 "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Key Challenges</h2>
              <p className={styles.bodyText}>
                {
                  "Building Spotitube had numerous challenges. \
                Aside from issues caused by my lack of experience which resolved over time, there isn't a perfect mapping between Youtube videos and Spotify songs: \
                Not all Youtube videos are necessarily songs, and even if they were, Spotify's search API was too strict to match Youtube titles that had additional text in them. \
                To address this issue, I did some pre-processing on all Youtube titles, removing common patterns that cause the match to fail. \
                However, this still did not handle instances where there was no possible match with a Spotify song. \
                To handle this, I needed to create an interactive UI that displayed failed matches, and allowed users to either discard the song or search for a match themselves. \
                \
                "
                }
                <br />
                <br />
              </p>
              <h2 className={styles.bigSubheading}>Gallery</h2>
              <p className={styles.bodyText}>
                {
                  "While Spotitube's main domain has expired, I've recently migrated the project from Heroku's free tier to Vercel, so you can see how it works!"
                }
                <br></br>
                <Link
                  target="_blank"
                  href="https://spotitube-khaki.vercel.app/"
                >
                  <a target="_blank" rel="noreferrer">
                    Vercel Link
                  </a>
                </Link>
                <br></br>
                <Link
                  target="_blank"
                  href="https://github.com/JosephKan3/spotitube"
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
                  src={spotitube}
                  alt="Spotitube Website"
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

export default Spotitube;
