"use client"

import { Input, RangeSlider, RangeSliderValue, Slider, Text, Title } from "@mantine/core"
import { debounce } from "lodash"
import { ChangeEvent, useState } from "react"
import styles from "./PriceFilter.module.css"

const PriceFilter = () => {
	const [minValue, setMinValue] = useState(0)
	const [maxValue, setMaxValue] = useState(2000)

	const onChangeInputMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMinValue(+e.target.value)
	}

	const onChangeInputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(+e.target.value)
	}

	const onChangeInputSlider = (values: RangeSliderValue) => {
		setMinValue(values[0])
		setMaxValue(values[1])
	}

	return (
		<div className={styles.priceFilters}>
			<Text
				fz={16}
				fw={700}
			>
				Цена от и до:
			</Text>
			<div className={styles.inputsBlock}>
				<Input
					value={minValue}
					rightSection={"₽"}
					type="number"
					radius="md"
					onChange={onChangeInputMinValueHandler}
				/>
				<Input
					value={maxValue}
					rightSection={"₽"}
					type="number"
					radius="md"
					onChange={onChangeInputMaxValueHandler}
				/>
			</div>
			<RangeSlider
				color="accent"
				min={0}
				max={2000}
				label={null}
				value={[minValue, maxValue]}
				minRange={100}
				onChange={e => onChangeInputSlider(e)}
			/>
		</div>
	)
}

export default PriceFilter
