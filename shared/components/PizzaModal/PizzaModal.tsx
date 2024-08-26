import { useIngredientsStore } from "@/shared/store/ingredients"
import { Pizza, PizzaSizeName } from "@/types/pizzas"
import { Button, Modal, SegmentedControl, Title } from "@mantine/core"
import Image from "next/image"
import { useState } from "react"
import IngredientCard from "../IngredientCard/IngredientCard"
import styles from "./PizzaModal.module.scss"

interface Props {
	isOpen: boolean
	onClose: () => void
	pizza: Pizza
}

const doughData = [
	{
		label: "традиционное",
		value: "traditional",
	},
	{
		label: "тонкое",
		value: "thin",
	},
]

interface SizeData {
	label: string
	value: PizzaSizeName
}

const sizeData: SizeData[] = [
	{ label: "25 см", value: "SMALL" },
	{ label: "30 см", value: "MEDIUM" },
	{ label: "35 см", value: "LARGE" },
]

const PizzaModal = ({ isOpen, onClose, pizza }: Props) => {
	const ingredients = useIngredientsStore(state => state.ingredients)
	const [checkedIngredients, setCheckedIngredients] = useState<string[]>([])

	const toggleCheckedIngredient = (id: string) => {
		if (checkedIngredients.includes(id)) return setCheckedIngredients(prev => prev.filter(item => item !== id))
		setCheckedIngredients(prev => [...prev, id])
	}
	console.log(checkedIngredients)

	return (
		<Modal
			className={styles.modal}
			opened={isOpen}
			onClose={onClose}
			centered
			size="1000px"
			withCloseButton={false}
			radius="lg"
		>
			<div className={styles.container}>
				<div className={styles.imageBlock}>
					<Image
						src={pizza.imageUrl}
						alt={`Изображение ${pizza.name}`}
						loading="lazy"
						width={300}
						height={300}
					/>
				</div>
				<div className={styles.propertyBlock}>
					<div>
						<Title order={3}>{pizza.name}</Title>
					</div>
					<div className={styles.optionsBlock}>
						<SegmentedControl
							data={doughData}
							radius="md"
							withItemsBorders={false}
						/>
						<SegmentedControl
							data={sizeData}
							radius="md"
							withItemsBorders={false}
						/>
					</div>
					<div className={styles.ingredientsBlock}>
						{ingredients.map(item => (
							<IngredientCard
								key={item.id}
								{...item}
								onClickHandler={toggleCheckedIngredient}
								isChecked={checkedIngredients.includes(item.id)}
							/>
						))}
					</div>
					<Button className={styles.addBtn}>Добавить в корзину</Button>
				</div>
			</div>
		</Modal>
	)
}

export default PizzaModal
