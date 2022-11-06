import { useRouter } from 'next/router'

const Products = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p className=" text-3xl font-light">Products: {slug}</p>
}

export default Products
