import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Chart from "@/components/Chart";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [oandaReturns, setOandaReturns] = useState(0);
  const [oandaTradeInstruments, setOandaTradeInstruments] = useState({});

  // Fetches portfolio returns data from OANDA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/oandaReturn");
        const data = await response.json();
        setOandaReturns(data);
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
        console.log(data);
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
        <meta name="description" content="Joseph Kan's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div>
        <section className={styles.introduction_section}>
          <header className={styles.introduction_header}>
            <div className={styles.content_body}>
              <div className={styles.profile_image}>
                <img src="headshot.jpg" alt="Joseph Kan Picture" />
              </div>
              <div className={styles.introduction}>
                <h1 className={styles.introduction}>{"Hello, I'm Joseph!"}</h1>
                <p>
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
                  {"If you would like to chat, please reach out to me on"}
                  <a href="https://www.linkedin.com/in/joseph-kan-21116b193/">
                    {"LinkedIn"}
                  </a>
                  {"or at"}
                  <a href="mailto:josephkan3@gmail.com">josephkan3@gmail.com</a>
                  {". Feel free to browse my portfolio below!"}
                </p>
              </div>
            </div>
          </header>
        </section>

        <section className={styles.portfolio_section}>
          <h2>My Project Portfolio</h2>
          <div className={styles.card_container}>
            {/* <!-- Spotitube --> */}
            <ProjectCard
              title="Spotitube"
              description="Youtube to Spotify Playlist Converter"
              imageSrc="portfolioImages/spotitube.jpg"
              githubUrl="https://github.com/JosephKan3/spotitube"
              notice="Server Currently Offline"
              motivation="I wanted to create a tool to help me migrate my Youtube playlists from the first 15 years of my life to Spotify: a task that would've taken forever."
              challenges={[
                "Handling OAuth flows for Spotify and Youtube",
                "Optimizing search algorithm used to match Youtube titles against Spotify track names",
                "Creating a reactive UI to simplify modification of playlists with hundreds of songs",
              ]}
            />
            {/* <!-- GPTuwu --> */}
            <ProjectCard
              title="GPTuwu"
              description="Makes ChatGPT a Little Cuter"
              imageSrc="portfolioImages/gptuwu.gif"
              githubUrl="https://github.com/JosephKan3/GPTuwu"
              motivation="Sometimes ChatGPT can beincredibly dumb. Putting a cute face on it makes it slightly more tolerable."
              challenges={[
                "While you would assume this would be a simple chrome extension, there's a lot of weird DOM manipulation caused by all the web frameworks being used. This makes it challenging to add another listener modifying the DOM without conflicting with other listeners and causing bugs",
              ]}
            />
          </div>
        </section>
        <section className={styles.investment_section}>
          <h2>My Investment Portfolio</h2>
          <p>
            {
              "I trade a variety of currencies, commodities, and bonds, focusing on \
            global macro themes. If you have an interesting trade idea, hit me \
            up! I'm happy to hear your thoughts!"
            }
            <br />
            <br />
            <span className={styles.bold}>
              Total Return:{" "}
              <span
                className={
                  oandaReturns >= 0 ? styles.cash_money : styles.L_Ratio
                }
              >
                {oandaReturns}%
              </span>
            </span>
          </p>
          <div className={styles.instrumentChartWrapper}>
            <Chart dataDictionary={oandaTradeInstruments}></Chart>
          </div>
        </section>
      </div>
    </>
  );
}
