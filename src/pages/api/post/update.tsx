import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const { name, newDescription, newPrice, newStock } = req.body;

  const updateProduct = await prisma.product.update({
    where: {
      name: name
    },
    data:{
        description: newDescription,
        stock: newStock,
        price: newPrice
    }
  });
  res.json(updateProduct);
}