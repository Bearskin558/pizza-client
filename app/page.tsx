import Categories from "@/shared/components/Categories"
import Filters from "@/shared/components/Filters"
import PizzasContainer from "@/shared/components/PizzasContainer/PizzasContainer"
import { Pizza } from "@/types/pizzas"
import { Title } from "@mantine/core"
import styles from "./page.module.css"

export default async function Home() {
	const baseUrl = process.env.NEXT_API_URL
	const pizzas = (await (await fetch(baseUrl + "/pizzas", { next: { revalidate: 3600 } })).json()) as Pizza[]

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
					<Filters />

					<PizzasContainer pizzas={pizzas} />
				</div>
			</div>
		</main>
	)
}
