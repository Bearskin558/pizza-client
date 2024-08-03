import { Pizza } from "@/types/pizzas"
import PizzaCard from "../PizzaCard"
import styles from "./PizzasContainer.module.css"

interface Props {
	pizzas: Pizza[]
}

const PizzasContainer = ({ pizzas }: Props) => {
	return (
		<div className={styles.container}>
			{pizzas.map(pizza => (
				<PizzaCard
					pizza={pizza}
					key={pizza.id}
				/>
			))}
		</div>
	)
}

export default PizzasContainer
