import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

//import { trpc } from "../utils/trpc";

const Home: NextPage = () => {

  const linkStyle:string = "text-xl underline text-blue-500"

  return (
    <>
      <Head>
        <title>T3 stack CRUD test</title>
        <meta name="description" content="CRUD app using the t3 stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-9xl text-center font-bold">Products list:</h1>
        <ul>
          <li className="mt-3">
            <Link href="/about" className={`${linkStyle}`}>Go to about page</Link>
          </li>
          <li className="mt-3">
            <Link href="/products/1" className={`${linkStyle} font-bold`}>Go to /products/[slug].tsx</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;