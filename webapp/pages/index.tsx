import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  if (user === null) {
    console.log("user null");
  } else {
    console.log("logged in");
  }

  const foo = <p>i am foo</p>;
  const userOrLogin =
    user == null ? (
      <a href="/api/auth/login">
        <p className={styles.description}>sign in with Twitter!</p>
      </a>
    ) : (
      <div>
        <img src={user.picture as string} alt={user.name as string} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );

  return (
    <div className={styles.container}>
      <Head>
        <title>Airdrop</title>
        <meta name="description" content="$SIDLLC Airdrop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Airdrop!</h1>
      </main>
      {userOrLogin}
      <footer className={styles.footer}>
        <a
          href="https://siddharthks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          siddharthks.com
        </a>
      </footer>
    </div>
  );
};

export default Home;
