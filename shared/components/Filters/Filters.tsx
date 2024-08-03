import { Button, Title } from "@mantine/core"
import styles from "./Filters.module.css"
import IngredientsFilter from "./IngredientsFilter/IngredientsFilter"
import PriceFilter from "./PriceFilter/PriceFilter"

const Filters = () => {
	return (
		<div className={styles.filters}>
			<Title
				size="h3"
				order={3}
			>
				Фильтрация
			</Title>
			<PriceFilter />
			<IngredientsFilter />
			<Button
				h={50}
				fz={16}
			>
				Применить
			</Button>
		</div>
	)
}

export default Filters
