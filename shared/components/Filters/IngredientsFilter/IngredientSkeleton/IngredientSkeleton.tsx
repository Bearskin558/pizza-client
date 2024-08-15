import { Skeleton } from "@mantine/core"
import { motion } from "framer-motion"
import styles from "./IngredientSkeleton.module.css"

const IngredientSkeleton = () => {
	return (
		<motion.div
			className={styles.wrapper}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<Skeleton
				height={20}
				width={20}
				radius={8}
			/>
			<Skeleton
				height={20}
				width={200}
			/>
		</motion.div>
	)
}

export default IngredientSkeleton
