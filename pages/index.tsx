import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.scss";
import PieChart from "../components/Chart/PieChart";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import headshot from "/public/portfolioImages/headshot.png";
import gptuwu from "/public/portfolioImages/gptuwu.gif";
import redditFilters from "/public/portfolioImages/redditFilters.gif";
import spotitube from "/public/portfolioImages/spotitube.jpg";
import LineChart from "../components/Chart/LineChart";

const Home: NextPage = () => {
  const [totalReturn, setTotalReturn] = useState(0);
  const [oandaReturns, setOandaReturns] = useState([]);
  const [oandaTradeInstruments, setOandaTradeInstruments] = useState({});

  // Fetches portfolio returns data from OANDA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/oandaReturn");
        const data: Trade[] = await response.json();

        // Set returns data for chart
        setOandaReturns(data as any);

        // Trunacates to two decimal places
        setTotalReturn(
          data.at(-1) === undefined
            ? 0
            : parseFloat((data.at(-1) as Trade).cumPerformance.toFixed(2))
        );
      } catch (error) {
        console.error("Error fetching OANDA returns:", error);
      }
    };

    fetchData();
  }, []);

  // Fetches trade instrument summary data from OANDA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/oandaTrades");
        const data = await response.json();
        setOandaTradeInstruments(data);
      } catch (error) {
        console.error("Error fetching OANDA trade instrument summary:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Joseph Kan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="sitePreview.jpg" />
      </Head>
      <div className="container">
        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.introductionBody}>
            <div className={styles.introductionText}>
              <h1 className={styles.mainHeading}>
                {"Hello, I'm "}
                <span className={styles.highlight}>{"Joseph"}</span>
                {"!"}
              </h1>
              <h3 className={styles.mainSubheading}>
                {
                  "I'm a business and computer science student at the Ivey \
                  Business School, interested in software development and global \
                  macro trading strategies."
                }
                <br />
                <br />
                {
                  "I've previously interned at Hawkbridge Capital Partners as an \
                  investment banking analyst. I also worked at Moongate and \
                  Fourth Dimension as a software developer!"
                }
                <br />
                <br />
                {
                  "Outside of work, I enjoy going on long walks, dancing, and \
                  competitive debate."
                }
                <br />
                <br />
                {"If you would like to chat, please reach out to me at "}
                <a href="mailto:josephkan3@gmail.com">josephkan3@gmail.com</a>
                {" or on "}
                <a
                  href="https://www.linkedin.com/in/joseph-kan-21116b193/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"LinkedIn"}
                </a>
                {". Feel free to browse my portfolios below!"}
              </h3>
            </div>
            <div className={styles.headshotWrapper}>
              <div className={styles.headshotImageWrapper}>
                <Image
                  className={styles.headshotImage}
                  src={headshot}
                  alt="Joseph Kan's Headshot"
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

        {/* Project Portfolio */}
        <section className={styles.projectSection}>
          <h1 className={styles.subTitle}>My Project Portfolio</h1>
          <div className={styles.card_container}>
            {/* <!-- Spotitube --> */}
            <ProjectCard
              title="Spotitube"
              link="spotitube"
              description="Youtube to Spotify Playlist Converter"
              imageSrc={spotitube}
              githubUrl="https://github.com/JosephKan3/spotitube"
              notice="Server Currently Offline"
              motivation={
                <>
                  {
                    "I wanted to create a tool to help me migrate the Youtube playlists I made during the first 15 years of my life over to Spotify: a task that would've taken forever without automation."
                  }
                </>
              }
              challenges={[
                "Handling OAuth flows for Spotify and Youtube",
                "Optimizing search algorithm used to match Youtube titles against Spotify track names",
                "Creating a reactive UI to simplify modification of playlists with hundreds of songs",
              ]}
            />
            {/* <!-- GPTuwu --> */}
            <ProjectCard
              title="GPTuwu"
              link="gptuwu"
              description="Makes ChatGPT a Little Cuter"
              imageSrc={gptuwu}
              githubUrl="https://github.com/JosephKan3/GPTuwu"
              motivation={
                <>
                  {"Sometimes ChatGPT can be "}
                  <span style={{ fontStyle: "italic" }}>incredibly</span>{" "}
                  {
                    "dumb. Putting a cute face on it makes it slightly more tolerable."
                  }
                </>
              }
              challenges={[
                "While you would assume this would be a simple chrome extension, there's a lot of weird DOM manipulation caused by all the web frameworks being used. This makes it challenging to add another listener modifying the DOM without conflicting with other listeners and causing bugs",
              ]}
            />
            {/* <!-- Reddit Filters --> */}
            <ProjectCard
              title="Advanced Reddit Filters"
              link="advancedRedditFilters"
              description="Filters Reddit Posts by User, Keyword, and Subreddit"
              imageSrc={redditFilters}
              githubUrl="https://github.com/JosephKan3/redditFilters"
              motivation={
                <>
                  <span style={{ fontStyle: "italic" }}>You</span>{" "}
                  {" paid for your computer. "}
                  <span style={{ fontStyle: "italic" }}>You</span>{" "}
                  {
                    " should be able to decide what kind of content it shows you."
                  }
                  <br></br>
                  {"Features "}
                  <span style={{ fontStyle: "italic" }}>The Nuke</span>
                  {", which bans every user that posted in a given thread."}
                </>
              }
              challenges={[
                "Handling both the classic and new Reddit layouts, each with different DOM structures and loading behaviors",
                "Passing data between different browser environments (content script vs popup)",
                "Creating a responsive UI for that allows users to easily manage their filters",
              ]}
            />
          </div>
        </section>

        {/* Investment Portfolio */}
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <h1 className={styles.subTitle}>My Investment Portfolio</h1>
            <div className={styles.introductionText}>
              <h3 className={styles.investmentSubheading}>
                {
                  "I trade a variety of currencies, commodities, and bonds, focusing on \
            global macro themes. If you have an interesting trade idea, send me a message! \
            I'm happy to hear your thoughts!"
                }
              </h3>

              <h3 className={styles.mainSubheading}>
                <br></br>
                <span className={styles.bold}>
                  Total Return:{" "}
                  <span
                    className={
                      totalReturn >= 0 ? styles.cash_money : styles.L_Ratio
                    }
                  >
                    {totalReturn}%
                  </span>
                </span>
              </h3>
            </div>
            <div className={styles.instrumentChartWrapper}>
              <LineChart trades={oandaReturns}></LineChart>
            </div>
            <div className={styles.instrumentChartWrapper}>
              <PieChart dataDictionary={oandaTradeInstruments}></PieChart>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
