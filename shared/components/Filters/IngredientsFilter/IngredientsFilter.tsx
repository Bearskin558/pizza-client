"use client"

import { Button, Checkbox, Text } from "@mantine/core"
import { useState } from "react"
import styles from "./IngredientsFilter.module.css"

const data = ["Сырный соус", "Моцарелла", "Чеснок", "Солённые огурчики", "Красный лук", "Томаты"]

const IngredientsFilter = () => {
	const [isVisibleAll, setIsVisibleAll] = useState(false)
	return (
		<div className={styles.ingredients}>
			<Text
				fw={700}
				fz={16}
			>
				Ингредиенты:
			</Text>
			{!isVisibleAll &&
				data.map(
					(item, index) =>
						index < 4 && (
							<Checkbox
								color="accent"
								label={item}
								key={item}
								radius="md"
							/>
						),
				)}
			{isVisibleAll &&
				data.map(item => (
					<Checkbox
						color="accent"
						label={item}
						key={item}
						radius="md"
					/>
				))}
			<Button
				variant="white"
				fz={16}
				size="md"
				px={0}
				w={"fit-content"}
				h={22}
				py={0}
				bg={"none"}
				onClick={() => setIsVisibleAll(!isVisibleAll)}
			>
				{isVisibleAll ? "- Скрыть" : "+ Показать все"}
			</Button>
		</div>
	)
}

export default IngredientsFilter
