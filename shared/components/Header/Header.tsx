"use client"

import { Colors } from "@/constants/colors"
import { Button, Input, rem } from "@mantine/core"
import clsx from "clsx"
import { Search02Icon } from "hugeicons-react"
import styles from "./Header.module.css"
import Logo from "./Logo/Logo"
import Search from "./Search/Search"
import SignInBtn from "./SignInBtn/SignInBtn"

const Header = () => {
	const headerClassName = clsx("container", styles.header)
	return (
		<header className={headerClassName}>
			<Logo />
			<Search />
			<div>
				<SignInBtn />
			</div>
		</header>
	)
}

export default Header
