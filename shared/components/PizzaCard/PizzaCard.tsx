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
			layout
			initial={{ scale: 1, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.2 }}
		>
			<Box
				className={styles.imgBlock}
				mb={15}
				bg={"#fff7ee"}
				h={260}
			>
				<Image
					src={pizza.imageUrl}
					alt={pizza.name}
					width={212}
					height={212}
					loading="lazy"
				/>
			</Box>
			<Text
				fw={600}
				fz={20}
				mb={7}
			>
				{pizza.name}
			</Text>
			<Text
				fz={14}
				c="secondaryText"
				mb={13}
				lh={rem(21)}
				h={105}
			>
				{pizza.description}
			</Text>
			<Box className={styles.priceBlock}>
				<Text fw={600}>
					от <span>{pizza.sizes[0].price}</span> ₽
				</Text>
				<Button
					leftSection={
						<Add01Icon
							size={12}
							color={Colors.ACCENT}
						/>
					}
					variant="light"
					fz={14}
					h={42}
					w={125}
				>
					Добавить
				</Button>
			</Box>
		</motion.div>
	)
}

export default PizzasCard
