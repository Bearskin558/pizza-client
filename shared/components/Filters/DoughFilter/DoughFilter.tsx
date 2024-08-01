import { Group, Radio, RadioGroup, Text } from "@mantine/core"
import styles from "./DoughFilter.module.css"

const DoughFilter = () => {
	return (
		<div className={styles.doughFilter}>
			<Text
				fz={16}
				fw={700}
			>
				Тип теста:
			</Text>
			<RadioGroup>
				<Group className={styles.group}>
					<Radio
						value="thin"
						label="Тонкое"
						color="accent"
					/>
					<Radio
						value="traditional"
						label="Традиционное"
						color="accent"
					/>
				</Group>
			</RadioGroup>
		</div>
	)
}

export default DoughFilter
