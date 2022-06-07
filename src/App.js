import React, { useState } from "react";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import CountryInfoPage from "./CountryInfoPage";

function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	function themeSwitcher() {
		const currentTheme = theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", currentTheme);

		setTheme(theme === "light" ? "dark" : "light");
	}
	return (
		<div className={theme} style={{ minHeight: "100vh" }}>
			<StyledHeader>
				<div>
					<Link to="/">
						{" "}
						<span>Where in the world? </span>
					</Link>
					<button onClick={themeSwitcher}>
						{theme === "light" ? (
							<img
								src={"/images/moon.svg"}
								alt="moon"
								className="moon"
							/>
						) : (
							<img
								src={"/images/moon2.svg"}
								alt=""
								className="moon"
							/>
						)}
						Dark Mode
					</button>
				</div>
			</StyledHeader>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/country/:countryname"
					element={<CountryInfoPage theme={theme} />}
				/>

				<Route path="/*" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

const StyledHeader = styled.header`
	box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
	-webkit-box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
	-moz-box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
	margin-bottom: 32px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: inherit;
	z-index: 10;

	a {
		color: inherit;
		text-decoration: none;
	}
	div {
		display: flex;
		justify-content: space-between;
		margin: 0 5%;
		padding: 24px 0;
		font-weight: 800;

		button {
			display: flex;
			background: transparent;
			border: none;
			cursor: pointer;
			color: inherit;
		}
	}
	.moon {
		width: 20px;
	}
`;
