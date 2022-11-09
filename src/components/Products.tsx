import Product from "./Product";

const Products = ({ products } : {products:any}) => {

    return(
        <div className=" mt-20 px-40 grid grid-cols-3 gap-5 justify-items-center ">
          {products.map((product:any) => <Product data={product} key={product.name} />)}
        </div>
    )
}

export default Products;