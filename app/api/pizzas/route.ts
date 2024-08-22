import prisma from "@/prisma/prisma-client"
import { NextResponse } from "next/server"
import { getAllPizzas } from "../instance"

export const revalidate = 3600

export async function GET(request: Request) {
	const pizzas = await prisma.pizza.findMany({
		select: {
			id: true,
			name: true,
			description: true,
			imageUrl: true,
			sizes: {
				select: {
					size: true,
					price: true,
				},
			},
			ingredients: {
				select: {
					id: true,
					name: true,
				},
			},
			categories: true,
		},
	})

	return NextResponse.json(pizzas)
}
