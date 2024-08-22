import { Ingredient, Pizza } from "@/types/pizzas"
import axios from "axios"

export const api = axios.create({
	baseURL: process.env.NEXT_API_URL,
})

export const getAllIngredients = async () => {
	const res = await api.get<Ingredient[]>("/ingredients")
	return res.data
}
export const getAllPizzas = async () => {
	const res = await api.get<Pizza[]>("/pizzas")
	return res.data
}
