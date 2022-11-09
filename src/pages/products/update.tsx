import React from "react";
import Router from 'next/router';

const Update = ({name, description, price, stock, update} : {name: string, description: string, price: string, stock: number, update: any}) => {
    
    const [newDescription, setNewDescription] = React.useState(description);
    const [newPrice, setNewPrice] = React.useState(price);
    const [newStock, setNewStock] = React.useState(stock);

    const handleDescription = (event:React.SyntheticEvent) => {
        const element = event.target as HTMLInputElement
        const value = element.value;
        setNewDescription(value)
    }

    const handlePrice = (event:React.SyntheticEvent) => {
        const element = event.target as HTMLInputElement
        const value = element.value;
        setNewPrice(value);
    }

    const handleStock = (event:React.SyntheticEvent) => {
        const element = event.target as HTMLInputElement
        const value = element.value;
        setNewStock(Number(value));
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        try {
            const body = { name, newDescription, newPrice, newStock };
            const url = nameToSlug(name);
            await fetch('/api/post/update', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            alert(`"${name}" actualizado exitosamente`);
            update();
            await Router.push(`/products/${url}`);
        } catch (error) {
            console.error(error);
        }
    }
    

    return(
        <div className=" bg-red-200 w-1/3 h-min mx-auto my-40 py-10 px-24 rounded-md ">

            <p className="text-2xl font-medium text-center">Datos a actualizar para "{name}"</p>
            
            <form onSubmit={handleSubmit} className=" mt-10 text-xl text-center">
                
                <div className=" flex justify-between mt-5 ">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        name="descripcion" 
                        id="descripcion" 
                        placeholder="Descripción" 
                        value={newDescription} 
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
                        value={newPrice} 
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
                        value={newStock}
                        onChange={handleStock}
                        className="border-solid border-2 border-black rounded"
                    />          
                </div>

                <button type="submit" className="mt-10 h-12 w-28 rounded-md bg-blue-400 text-gray-100 ">Actualizar</button>
            </form>
        </div>
    )
}
export default Update;

const nameToSlug = (str:string) =>{
    let url = str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
    
    return url
}