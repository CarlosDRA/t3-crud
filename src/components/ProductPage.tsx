import Image from "next/image";
import illustration from "public/image.svg";
import Router from 'next/router';
import React from "react";
import Update from "../pages/products/update";

const ProductPage = ({ product } : {product:any}) => {

    const [update, setUpdate] = React.useState(false)

    const handleDelete = async (event: React.SyntheticEvent) => {
        try {
            const body = {name: product.name} ;
            await fetch('/api/post/delete', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            alert(`El producto "${product.name}" fue eliminado exitosamente`)
            await Router.push(`/`);
        } catch (error) {
            console.error(error);
        }
    }

    const handleUpdate = (event: React.SyntheticEvent) => {
        setUpdate(!update);
    }

    if(update){
        return(
            <Update name={product.name} description={product.description} stock={product.stock} price={product.price} update={handleUpdate}/>
        )
    } else{
        return (
            <div className=" pt-20 px-80 grid grid-rows-2 gap-5 grid-cols-[max-content_1fr]">
                <div className=" w-96 grid justify-items-center items-center hover:shadow-md cursor-pointer " >
                    <Image src={illustration} alt="placeholder" width="50" height="50" />
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
                    <button className=" px-4 h-10 rounded-full bg-blue-500 text-zinc-200 " onClick={handleUpdate} >Modificar Item</button>
                    <button className=" px-4 h-10 rounded-full bg-red-500 text-zinc-200 " onClick={handleDelete}>Borrar Item</button>
                </div>
            </div>

        )
    }
}
export default ProductPage;
