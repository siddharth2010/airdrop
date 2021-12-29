import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
