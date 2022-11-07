const Product = ({data} : {data:any}) => {

    return(
        <div className=" box-border w-96 h-72 p-5 mt-2 flex flex-col justify-evenly text-left bg-green-700 rounded-md shadow-sm text-zinc-200">
            <h4 className=" font-medium text-lg ">{data.name}</h4>
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