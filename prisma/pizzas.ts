interface Pizza {
	name: string
	ingredients: string[]
	description: string
	sizes: Size[]
}

export interface Size {
	size: SizeName
	price: number
}

export type SizeName = "SMALL" | "MEDIUM" | "LARGE"

const pizzas: Pizza[] = [
	{
		name: "Сырная",
		description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
		ingredients: ["Сливочная моцарелла", "Сыры чеддер и пармезан"],
		sizes: [
			{
				size: "SMALL",
				price: 500,
			},
			{
				size: "MEDIUM",
				price: 700,
			},
			{
				size: "LARGE",
				price: 850,
			},
		],
	},
	{
		name: "Пепперони фреш",
		description: "Пикантная пепперони , увеличенная порция моцареллы, томаты , фирменный томатный соус",
		ingredients: ["Пикантная пепперони", "Сливочная моцарелла", "Свежие томаты"],
		sizes: [
			{
				size: "SMALL",
				price: 520,
			},
			{
				size: "MEDIUM",
				price: 730,
			},
			{
				size: "LARGE",
				price: 900,
			},
		],
	},
]
export default pizzas
