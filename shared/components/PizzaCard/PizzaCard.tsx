import { Pizza } from "@/types/pizzas"
import { Box, Button, Text, rem } from "@mantine/core"
import { Add01Icon, Pulse01Icon } from "hugeicons-react"
import Image from "next/image"
import { Colors } from "@/constants/colors"
import styles from "./PizzaCard.module.css"

interface Props {
	pizza: Pizza
}

const PizzasCard = ({ pizza }: Props) => {
	return (
		<div className={styles.card}>
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
		</div>
	)
}

export default PizzasCard
