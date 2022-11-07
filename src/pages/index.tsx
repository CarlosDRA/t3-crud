import Head from "next/head";
import Navbar from "../components/Navbar";


import Products from "../components/Products";

import {prisma} from "../server/db/client";

const List = ({ products } : {products:any}) => {

  return (
    <>
      <Head>
        <title>T3 stack CRUD test</title>
        <meta name="description" content="CRUD app using the t3 stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <h1 className="text-7xl text-center font-bold mt-5">Lista de productos:</h1>
        <Products products={products} />
      </main>
    </>
  )
};

export default List

export async function getStaticProps() {
  const products = await prisma.product.findMany();
  
  return {
      props: {
          products
      }
  }
};