const ProductPage = ({ product } : {product:any}) => {

    return(
        <div className=" pt-20 px-80 grid grid-rows-2 gap-5 grid-cols-[max-content_1fr]">
            <div className=" w-96 " >
                <img src="public/image.svg" alt="placeholder" className=" w-full h-full "/>
            </div>
            <div>
                <h2 className="font-medium text-4xl">{product.name}</h2>
                <br/><hr />
                <div className="mt-5 text-2xl flex justify-between">
                    <p>Precio: {product.price} ¢</p>
                    <p>Inventario: {product.stock}</p>
                </div>
                <br/><hr />
                <p className=" text-2xl mt-5 ">{product.description}</p>
            </div>
            <div className=" col-span-2 h-20 flex justify-evenly items-center">
                <button className=" px-4 h-10 rounded-full bg-blue-500 text-zinc-200 " >Modificar Item</button>
                <button className=" px-4 h-10 rounded-full bg-red-500 text-zinc-200 " >Borrar Item</button>
            </div>
        </div>
    )
}
export default ProductPage;
