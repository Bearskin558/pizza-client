import prisma from "@/prisma/prisma-client"
import { Pizza } from "@prisma/client"
import { NextResponse } from "next/server"
import { getAllIngredients } from "../instance"

export const revalidate = 3600

export async function GET(request: Request) {
	const ingredients = await prisma.ingredient.findMany()
	return NextResponse.json(ingredients)
}
