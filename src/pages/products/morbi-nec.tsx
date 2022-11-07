import {prisma} from "../../server/db/client";

const ProductPage = ({product} : {product: any}) => {
    return(
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Price: {product.price} ¢</p>
        </div>
    )
}
export default ProductPage;

export async function getStaticProps() {
    const product = await prisma.product.findUnique({
        where: {
            name: "Morbi nec",
        }
    })

    return{
        props: {
            product: product
        }
    }
}