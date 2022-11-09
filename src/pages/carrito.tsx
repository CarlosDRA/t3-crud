import { useCartContext } from "../context/state";

const cart = [
    {
        name: "Morbi nec",
        price: "0.25",
        quantity: 1
    },
    {
        name: "Duis felis leo",
        price: "0.08",
        quantity: 2
    },
    {
        name: "Integser vel dui euismod nunc",
        price: "0.11",
        quantity: 1
    },
]

const Cart = () => {

    const items = (cart:any) => {
        return cart.map((item:any) => {
            let price = Number(item.price) * item.quantity;
            return(
                <div key={item.name} className=" flex justify-between mt-8 h-14 border-2 border-gray-200 rounded ">
                    <p className="w-96 h-full flex justify-center items-center ">{item.name}</p>
                    <p className="w-20 h-full flex justify-center items-center ">{item.price} ¢</p>
                    <p className="w-20 h-full flex justify-center items-center ">{item.quantity}</p>
                    <p className="w-20 h-full mr-5 flex justify-center items-center ">{price} ¢</p>
                </div>
            )
        })
    }

    const getTotal = (cart:any) => {
        
        let amount:number[] = [];
        
        cart.map((item:any) => {
            let price = Number(item.price) * item.quantity;
            amount.push(price)
        });

        const initialValue = 0;
        const total = amount.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        return total;
    }

    return(
        <div>
            <h2 className=" text-5xl text-center mt-20">Carrito de compras</h2>
            <div className=" px-40 py-10 mt-10 text-xl ">
                <div className=" flex justify-between border-2 border-gray-400 rounded">
                    <p className="w-96 flex justify-center items-center ">Producto</p>
                    <p className="w-20 flex justify-center items-center ">Precio</p>
                    <p className="w-20 flex justify-center items-center ">Cantidad</p>
                    <p className="w-20 mr-5 flex justify-center items-center ">Total</p>
                </div>
                <div>
                    {items(cart)}
                </div>
                <h3 className="mt-10 font-bold text-2xl">Precio total: {getTotal(cart)} ¢</h3>
            </div>
        </div>
    )
}
export default Cart;