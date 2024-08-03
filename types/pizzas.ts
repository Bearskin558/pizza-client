export interface Pizza {
	id: string
	name: string
	description: string
	imageUrl: string
	sizes: Size[]
	ingredients: Ingredient[]
}

interface Size {
	size: SizeName
	price: number
}

interface Ingredient {
	id: string
	name: string
}

type SizeName = "SMALL" | "MEDIUM" | "LARGE"
