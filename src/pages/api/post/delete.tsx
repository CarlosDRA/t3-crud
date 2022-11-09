import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const { name } = req.body;

  const deleteProduct = await prisma.product.delete({
    where: {
      name: name
    }
  });
  res.json(deleteProduct);
}