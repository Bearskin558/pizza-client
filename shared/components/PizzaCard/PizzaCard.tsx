import { Pizza } from "@/types/pizzas"
import { Box, Button, Text, rem } from "@mantine/core"
import { motion } from "framer-motion"
import { Add01Icon } from "hugeicons-react"
import Image from "next/image"
import { Colors } from "@/constants/colors"
import styles from "./PizzaCard.module.css"

interface Props {
	pizza: Pizza
}

const PizzasCard = ({ pizza }: Props) => {
	return (
		<motion.div
			className={styles.card}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
			transition={{ type: "sping", stiffness: 600, damping: 20 }}
			layout
		>
			<div className={styles.imgBlock}>
				<Image
					src={pizza.imageUrl}
					alt={pizza.name}
					width={212}
					height={212}
					loading="lazy"
				/>
			</div>

			<Text className={styles.cardName}>{pizza.name}</Text>
			<Text
				className={styles.cardDescription}
				c="secondaryText"
			>
				{pizza.description}
			</Text>
			<Box className={styles.priceBlock}>
				<Text fw={600}>
					от <span>{pizza.sizes[0].price}</span> ₽
				</Text>
				<Button
					className={styles.addBtn}
					variant="outline"
					leftSection={
						<Add01Icon
							size={15}
							color={Colors.ACCENT}
						/>
					}
				>
					Добавить
				</Button>
			</Box>
		</motion.div>
	)
}

export default PizzasCard
