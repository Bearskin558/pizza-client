"use client"

import { useFilterStore } from "@/shared/store/filters"
import { Button, Title } from "@mantine/core"
import { useState } from "react"
import styles from "./Filters.module.css"
import IngredientsFilter from "./IngredientsFilter/IngredientsFilter"
import PriceFilter from "./PriceFilter/PriceFilter"

const Filters = () => {
	const [setMinPriceStore, setMaxPriceStore, setIngredients] = useFilterStore(state => [
		state.setMinPrice,
		state.setMaxPrice,
		state.setIngredients,
	])
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(2000)
	const [checkedIngredients, setCheckedIngredients] = useState<string[]>([])

	const applyHandler = () => {
		setMinPriceStore(minPrice)
		setMaxPriceStore(maxPrice)
		setIngredients(checkedIngredients)
		console.log(checkedIngredients)
	}

	return (
		<div className={styles.filters}>
			<Title
				size="h3"
				order={3}
			>
				Фильтрация
			</Title>
			<PriceFilter
				minPrice={minPrice}
				maxPrice={maxPrice}
				setMaxPrice={setMaxPrice}
				setMinPrice={setMinPrice}
			/>
			<IngredientsFilter
				setIngredients={setCheckedIngredients}
				checkedIngredients={checkedIngredients}
			/>
			<Button
				h={50}
				fz={16}
				onClick={applyHandler}
			>
				Применить
			</Button>
		</div>
	)
}

export default Filters
