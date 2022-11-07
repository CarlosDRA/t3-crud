import Image from "next/image";
import Link from "next/link";
import cart from "public/cart.svg";

const Navbar = () => {
    return (
        <nav className=" w-screen h-12 bg-slate-200 flex justify-around items-center ">
            <Link href={`/products/crear`}>
                Crea un producto
            </Link>
            <Link href={`/carrito`} className=" h-full flex items-center ">
                <Image src={cart} alt="placeholder" height="30"/>
            </Link>
        </nav>
    )
}
export default Navbar;