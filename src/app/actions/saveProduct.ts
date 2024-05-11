"use server";
import prisma from "@/lib/db/prisma";

type saveProduct = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

export async function saveProduct(data: saveProduct) {
  "use server";
  const { name, description, imageUrl, price } = data;
  const response = await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  return response;
}
