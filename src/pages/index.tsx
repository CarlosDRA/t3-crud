import { type NextPage } from "next";
import Head from "next/head";
//import Link from "next/link";

//import { trpc } from "../utils/trpc";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>T3 stack CRUD test</title>
        <meta name="description" content="CRUD app using the t3 stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-9xl text-center font-bold">Hello world!</h1>
      </main>
    </>
  );
};

export default Home;