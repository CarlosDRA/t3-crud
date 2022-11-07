import {prisma} from "../server/db/client";


const List = ({ products } : {products:any}) => {
    return (
        <ul>
          {products.map((product:any) => <li>{product.name}</li>)}
        </ul>
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