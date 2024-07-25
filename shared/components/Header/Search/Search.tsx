import { Colors } from "@/constants/colors"
import { TextInput } from "@mantine/core"
import { Search02Icon } from "hugeicons-react"
import styles from "./Search.module.css"

const Search = () => {
	return (
		<TextInput
			className={styles.search}
			size="md"
			placeholder="Поиск пиццы..."
			radius={"lg"}
			leftSection={
				<Search02Icon
					color={Colors.SECONDARY_TEXT}
					size={20}
				/>
			}
		/>
	)
}

export default Search
