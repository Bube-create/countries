import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountryCard from "./CountryCard";
const Home = () => {
	const [countries, setCountries] = useState(null);
	const [countrySearch, setCountrySearch] = useState();

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((data) => data.json())
			.then((data) => setCountries(data))
			.catch((err) => err);
	}, []);
	function searchCountry(e) {
		fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
			.then((data) => data.json())
			.then((data) => setCountrySearch(data))
			.catch((err) => err);
	}

	function searchCountryRegion(e) {
		fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
			.then((data) => data.json())
			.then((data) => setCountrySearch(data))
			.catch((err) => err);
	}
	return (
		<>
			<Wrapper>
				<input
					onChange={searchCountry}
					placeholder="Search for a country..."
				/>
				<select onChange={searchCountryRegion}>
					<option>filter by region</option>
					<option value="africa">Africa</option>
					<option value="americas">Americas</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
				</select>
			</Wrapper>
			<StyledDiv>
				{countrySearch && countrySearch.length >= 1
					? countrySearch.map((country) => (
							<CountryCard
								country={country}
								key={country.name.common}
							/>
					  ))
					: countries &&
					  countries.map((country) => (
							<CountryCard
								country={country}
								key={country.name.common}
							/>
					  ))}
			</StyledDiv>
		</>
	);
};

export default Home;

const Wrapper = styled.div`
	margin: 0 5%;
	padding-top: 128px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 32px;
	input {
		padding: 8px;
		flex-basis: 400px;
		display: block;
	}

	select {
		padding: 8px 16px;
		flex-basis: 200px;
	}
`;
const StyledDiv = styled.div`
	display: grid;
	margin-top: 64px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-template-rows: repeat(auto-fill, 350px);
	gap: 48px;
	padding: 0 16px;
	@media (min-width: 1000px) {
		gap: 40px;
		margin: 72px 5%;
		padding: 0;
		grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
	}
`;
