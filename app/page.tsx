import Categories from "@/shared/components/Categories"
import Filters from "@/shared/components/Filters"
import PizzasContainer from "@/shared/components/PizzasContainer/PizzasContainer"
import { Title } from "@mantine/core"
import { Suspense } from "react"
import { getAllIngredients, getAllPizzas } from "./api/instance"
import styles from "./page.module.css"

export default async function Home() {
	const ingredients = await getAllIngredients()
	const pizzas = await getAllPizzas()
	return (
		<main className={styles.main}>
			<div className="container">
				<Title
					size="h1"
					className={styles.title}
				>
					Пиццы
				</Title>
				<div>
					<Categories />
				</div>
				<div className={styles.content}>
					<Filters ingredients={ingredients} />
					<Suspense fallback={<p>загрузка</p>}>
						<PizzasContainer pizzas={pizzas} />
					</Suspense>
				</div>
			</div>
		</main>
	)
}
