import Product from "./Product";
import Link from "next/link";

const Products = ({ products } : {products:any}) => {

    return(
        <div className=" mt-20 px-40 grid grid-cols-3 gap-5 justify-items-center ">
          {products.map((product:any) => <Product data={product} />)}
        </div>
    )
}

export default Products;