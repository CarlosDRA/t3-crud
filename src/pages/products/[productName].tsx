import {prisma} from "../../server/db/client";
import ProductPage from "../../components/ProductPage";

const ProductName = ({product} : {product: any}) => {
    return(
        <ProductPage product={product} />
    )
}
export default ProductName;

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