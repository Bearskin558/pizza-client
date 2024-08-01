import Categories from "@/shared/components/Categories"
import Filters from "@/shared/components/Filters"
import { Button, Text, Title } from "@mantine/core"
import styles from "./page.module.css"

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="container">
				<Title
					size="h1"
					className={styles.title}
				>
					Все пиццы
				</Title>
				<div>
					<Categories />
				</div>
				<div className={styles.content}>
					<Filters />
					<div>Пиццы</div>
				</div>
			</div>
		</main>
	)
}
