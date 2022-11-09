import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const { name, description, price, stock } = req.body;

  const result = await prisma.product.create({
    data: {
      name: name,
      description: description,
      price: price,
      stock: stock,
    },
  });
  res.json(result);
}