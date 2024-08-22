import { Pizza } from "@/types/pizzas"
import { Modal } from "@mantine/core"
import styles from "./PizzaModal.module.scss"

interface Props {
	isOpen: boolean
	onClose: () => void
	pizza: Pizza
}

const PizzaModal = ({ isOpen, onClose, pizza }: Props) => {
	return (
		<Modal
			className={styles.modal}
			opened={isOpen}
			onClose={onClose}
			centered
			size="1000px"
			withCloseButton={false}
		>
			<p>{pizza.name}</p>
		</Modal>
	)
}

export default PizzaModal
