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

export async function getStaticProps({ params } : {params:any}) {

    const productName = slugToName(params.productName);
    console.log(productName);


    const product = await prisma.product.findUnique({
        where: {
            name: productName,
        }
    })

    return{
        props: {
            product: product
        }
    }
}

export async function getStaticPaths() {
    const products = await prisma.product.findMany();

    const paths = products.map(product => {
        const productName = nameToSlug(product.name);

        return{
            params: {
                productName
            }
        }
    });
    return{
        paths,
        fallback: false
    }
}

const nameToSlug = (str:string) =>{
    let url = str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
    
    return url
}

const slugToName = (str:string) => {
    let product = str.replace(/-/g, " ");
    product = product.charAt(0).toUpperCase() + product.slice(1);
    return product;
  }