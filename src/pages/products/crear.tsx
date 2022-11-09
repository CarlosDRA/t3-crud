import React from "react";
import Router from 'next/router';

const Create = () => {
    
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [stock, setStock] = React.useState(1);

    const handleName = (event:React.SyntheticEvent) => {
        const element = event.target as HTMLInputElement
        let value = element.value;
        value = capitalizeName(value);
        setName(value);
    }

    const handleDescription = (event:React.SyntheticEvent) => {
        const element = event.target as HTMLInputElement
        const value = element.value;
        setDescription(value)
    }

    const handlePrice = (event:React.SyntheticEvent) => {
        const element = event.target as HTMLInputElement
        const value = element.value;
        setPrice(value);
    }

    const handleStock = (event:React.SyntheticEvent) => {
        const element = event.target as HTMLInputElement
        const value = element.value;
        setStock(Number(value));
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        try {
            const body = { name, description, price, stock };
            const url = nameToSlug(name);
            await fetch('/api/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            await Router.push(`/products/${url}`);
        } catch (error) {
            console.error(error);
        }
    }
    

    return(
        <div className=" bg-red-200 w-1/3 h-min mx-auto my-40 py-10 px-24 rounded-md ">

            <p className="text-2xl font-medium text-center">Información del producto</p>
            
            <form onSubmit={handleSubmit} className=" mt-10 text-xl text-center">
                <div className=" flex justify-between mt-5 ">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        placeholder="Nombre" 
                        value={name} 
                        onChange={handleName} 
                        className="border-solid border-2 border-black rounded" 
                    />
                </div>

                <div className=" flex justify-between mt-5 ">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        name="descripcion" 
                        id="descripcion" 
                        placeholder="Descripción" 
                        value={description} 
                        onChange={handleDescription} 
                        className="border-solid border-2 border-black rounded"
                    />
                        
                </div>

                <div className=" flex justify-between mt-5 ">
                    <label htmlFor="precio">Precio</label>
                    <input 
                        type="number" 
                        name="precio" 
                        id="precio" 
                        placeholder="Precio" 
                        step=".01"
                        min="0.00"
                        value={price} 
                        onChange={handlePrice} 
                        className="border-solid border-2 border-black rounded"
                    />                  
                </div>
                
                <div className=" flex justify-between mt-5 ">
                    <label htmlFor="inventario">Inventario</label>
                    <input 
                        type="number" 
                        name="inventario"
                        id="inventario"
                        placeholder="Inventario"
                        min="1"
                        value={stock}
                        onChange={handleStock}
                        className="border-solid border-2 border-black rounded"
                    />          
                </div>

                <button type="submit" className="mt-10 h-12 w-28 rounded-md bg-blue-400 text-gray-100 ">Añadir</button>
            </form>
        </div>
    )
}
export default Create;

const nameToSlug = (str:string) =>{
    let url = str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
    
    return url
}

const capitalizeName = (str:string) => {
    let name = str.charAt(0).toUpperCase() + str.slice(1);
    return name;
}