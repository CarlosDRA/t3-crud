import Link from "next/link";

const Product = ({data} : {data:any}) => {

    const slug:string = nameToSlug(data.name);

    return(
        <div className=" box-border w-96 h-72 p-5 mt-2 flex flex-col justify-evenly text-left bg-green-700 rounded-md shadow-sm text-zinc-200">
            <Link href={`/products/${slug}`}>
                <h4 className=" font-medium text-lg ">{data.name}</h4>
            </Link>
            <p className=" font-normal mt-2.5">{data.description}</p>
            <div className=" flex flex-row justify-between mt-2.5">
                <p className=" font-normal ">Inventario: {data.stock} items</p>
                <p className=" font-normal ">Precio: {data.price} ¢</p>
            </div>
            <button className=" bg-lime-900 rounded-full mt-3">Añadir al Carrito</button>
        </div>
    )
}

export default Product;

const nameToSlug = (str:string) =>{
    let url = str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
    
    return url
}