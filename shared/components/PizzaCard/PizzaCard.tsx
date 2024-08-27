import { Pizza } from "@/types/pizzas"
import { Box, Button, Skeleton, Text } from "@mantine/core"
import { useDisclosure } from "@siberiacancode/reactuse"
import { motion } from "framer-motion"
import { Add01Icon } from "hugeicons-react"
import Image from "next/image"
import { useState } from "react"
import { Colors } from "@/constants/colors"
import PizzaModal from "../PizzaModal/PizzaModal"
import styles from "./PizzaCard.module.css"

interface Props {
	pizza: Pizza
}

const PizzasCard = ({ pizza }: Props) => {
	const [isLoading, setisLoading] = useState(true)
	const { opened, open, close } = useDisclosure()
	return (
		<motion.div
			layout
			initial={{ scale: 0.95, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ opacity: 0.05 }}
			transition={{ duration: 0.25 }}
			className={styles.card}
		>
			<div className={styles.imgBlock}>
				{isLoading && <Skeleton className={styles.imgSkeleton} />}
				<Image
					src={pizza.imageUrl}
					alt={pizza.name}
					width={212}
					height={212}
					loading="lazy"
					onLoad={() => setisLoading(false)}
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
					onClick={open}
				>
					Добавить
				</Button>
			</Box>
			<PizzaModal
				isOpen={opened}
				onClose={close}
				pizza={pizza}
			/>
		</motion.div>
	)
}

export default PizzasCard
