"use client"

import { Ingredient } from "@/types/pizzas"
import { Button, Checkbox, CheckboxGroup, Group, Text } from "@mantine/core"
import { useState } from "react"
import styles from "./IngredientsFilter.module.css"

interface Props {
	ingredients: Ingredient[] | undefined
	setIngredients: (ingredients: string[]) => void
	checkedIngredients: string[]
}

const IngredientsFilter = ({ ingredients, setIngredients, checkedIngredients }: Props) => {
	const [countVisibleIngredients, setCountVisibleIngredients] = useState<4 | 20>(4)
	const checkboxes = ingredients?.slice(0, countVisibleIngredients).map(ingredient => (
		<Checkbox
			color="accent"
			key={ingredient.id}
			label={ingredient.name}
			radius="md"
			value={ingredient.name}
		/>
	))
	if (ingredients?.length)
		return (
			<div className={styles.ingredients}>
				<Text
					fw={700}
					fz={16}
				>
					Ингредиенты:
				</Text>
				<Checkbox.Group
					onChange={e => setIngredients(e)}
					className={styles.group}
					value={checkedIngredients}
				>
					{checkboxes}
				</Checkbox.Group>
				<Button
					variant="white"
					fz={16}
					size="md"
					px={0}
					w={"fit-content"}
					h={22}
					py={0}
					bg={"none"}
					onClick={() => setCountVisibleIngredients(prev => (prev === 4 ? 20 : 4))}
				>
					{countVisibleIngredients === 20 ? "- Скрыть" : "+ Показать все"}
				</Button>
			</div>
		)
}

export default IngredientsFilter
