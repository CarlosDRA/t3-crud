import Products from "../components/Products";


import {prisma} from "../server/db/client";


const List = ({ products } : {products:any}) => {

    return (
        <Products products={products} />
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