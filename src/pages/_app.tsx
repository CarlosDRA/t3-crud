import App, { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

import { CartProvider } from "../context/state";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
};

export default trpc.withTRPC(MyApp);
