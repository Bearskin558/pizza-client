export interface Pizza {
	id: string
	name: string
	description: string
	imageUrl: string
	sizes: Size[]
	ingredients: Ingredient[]
	categories: Category[]
}

interface Size {
	size: SizeName
	price: number
}

export interface Ingredient {
	id: string
	name: string
	price: number
	imageUrl: string
}

type SizeName = "SMALL" | "MEDIUM" | "LARGE"
export type Category = "ALL" | "MEAT" | "SPICY" | "SWEET" | "VEGAN" | "CHICKEN"
