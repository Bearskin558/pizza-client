import { SegmentedControl } from "@mantine/core"
import styles from "./Categories.module.css"

const data = [
	{ label: "Все", value: "all" },
	{ label: "Мясные", value: "meat" },
	{ label: "Острые", value: "spicy" },
	{ label: "Сладкие", value: "sweet" },
	{ label: "Вегетарианские", value: "vegan" },
	{ label: "С курицей", value: "chicken" },
]

const Categories = () => {
	return (
		<div className={styles.wrapper}>
			<SegmentedControl
				data={data}
				radius="md"
				withItemsBorders={false}
				className={styles.categories}
				fullWidth={true}
			/>
		</div>
	)
}

export default Categories
