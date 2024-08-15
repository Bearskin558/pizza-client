"use client"

import { useGetAllIngredients } from "@/hooks/api/ingredients/useGetAllIngredients"
import { Ingredient } from "@/types/pizzas"
import { Button, Checkbox, Skeleton, Text } from "@mantine/core"
import { AnimatePresence, motion } from "framer-motion"
import { MouseEvent, memo, useState } from "react"
import IngredientItem from "./IngredientItem"
import IngredientSkeleton from "./IngredientSkeleton/IngredientSkeleton"
import styles from "./IngredientsFilter.module.css"

interface Props {
	setIngredients: (ingredients: string[]) => void
	checkedIngredients: string[]
}
const IngredientsFilter = ({ setIngredients, checkedIngredients }: Props) => {
	const { data: ingredients, isLoading, error, isFetched } = useGetAllIngredients()
	console.log(1)
	console.log(isLoading)
	console.log(isFetched)
	const checkHandler = (str: string[]) => {
		setIngredients(str)
	}
	const [countVisibleIngredients, setCountVisibleIngredients] = useState<4 | 20>(4)
	const checkboxes = ingredients
		?.sort((a, b) => a.name.localeCompare(b.name))
		?.sort((a, b) => Number(checkedIngredients.includes(b.name)) - Number(checkedIngredients.includes(a.name)))
		?.slice(0, countVisibleIngredients)
		.map(ingredient => (
			<IngredientItem
				name={ingredient.name}
				id={ingredient.id}
				key={ingredient.id}
			/>
		))

	return (
		<div className={styles.ingredients}>
			<Text
				fw={700}
				fz={16}
			>
				Ингредиенты:
			</Text>

			{isFetched && (
				<Checkbox.Group
					onChange={e => checkHandler(e)}
					className={styles.group}
					value={checkedIngredients}
				>
					<AnimatePresence>{checkboxes}</AnimatePresence>
				</Checkbox.Group>
			)}
			{!isFetched && (
				<div className={styles.skeleton}>
					<AnimatePresence>
						{new Array(4).fill("1").map((item, i) => (
							<IngredientSkeleton key={`skeleton item ${i}`} />
						))}
					</AnimatePresence>
				</div>
			)}
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
