import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CountryInfoPage = ({ theme }) => {
	let { countryname } = useParams();
	let navigate = useNavigate();

	const [country, setCountry] = useState(null);
	useEffect(() => {
		if (countryname.length > 3) {
			fetch(`https://restcountries.com/v3.1/name/${countryname}`)
				.then((data) => data.json())
				.then((data) => setCountry(data))
				.catch((err) => err);
		} else {
			fetch(`https://restcountries.com/v3.1/alpha/${countryname}`)
				.then((data) => data.json())
				.then((data) => setCountry(data))
				.catch((err) => err);
		}
	}, [countryname]);

	return (
		<Wrapper>
			<div>
				<div onClick={() => navigate(-1)} className="back-button">
					{" "}
					{theme === "light" ? (
						<img src={"/images/arrow.svg"} alt="moon" />
					) : (
						<img src={"/images/arrow21.svg"} alt="moon" />
					)}
					Back
				</div>
				{country && (
					<CountryInfo>
						<div className="left">
							<img src={country[0].flags.svg} alt="" />
						</div>
						<div className="right">
							<h2>{country[0].name.common}</h2>

							<div className="split">
								<div>
									<p>
										<span className="card-info__text">
											population:{" "}
										</span>
										{country[0].population}
									</p>
									<p>
										<span className="card-info__text">
											region:{" "}
										</span>{" "}
										{country[0].region}
									</p>
									<p>
										<span className="card-info__text">
											capital:{" "}
										</span>
										{country[0].capital &&
											country[0].capital[0]}
									</p>
								</div>
								<div>
									<p className="small-margin-top">
										<span className="card-info__text">
											Top level Domain:{" "}
										</span>
										{country[0].tld[0]}
									</p>
									<p>
										<span className="card-info__text">
											Currencies:{" "}
										</span>
										{country[0].currencies &&
											Object.values(
												country[0].currencies
											)[0].name}
									</p>

									<p>
										<span className="card-info__text">
											Languages:{" "}
										</span>
										{Object.values(country[0].languages)}
									</p>
								</div>
							</div>
							<div className="small-margin-top border-info">
								<p>
									<span className="card-info__text">
										Border Countries:{" "}
									</span>
								</p>
								<div className="borders">
									{country[0].borders &&
										country[0].borders.map(
											(border, index) => (
												<Link
													to={`/country/${border}`}
													key={index}
												>
													<span className="border">
														{border}
													</span>
												</Link>
											)
										)}
								</div>
							</div>
						</div>
					</CountryInfo>
				)}
			</div>
		</Wrapper>
	);
};

export default CountryInfoPage;

const Wrapper = styled.div`
	margin: 0 5%;
	padding-top: 72px;
	div {
		.back-button {
			margin: 32px 0;
			display: flex;

			cursor: pointer;
			width: max-content;
			gap: 4px;
			padding: 8px;
			font-weight: 600;
			box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
			-webkit-box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
			-moz-box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
			img {
				width: 20px;
			}

			@media (min-width: 1000px) {
				margin: 64px 0;
			}
		}
	}
`;
const CountryInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	.card-info__text {
		text-transform: capitalize;
		font-weight: 600;
	}
	p {
		font-weight: 300;
		margin: 12px 0;
	}

	.small-margin-top {
		margin-top: 64px;
	}

	.borders {
		display: flex;
		gap: 8px;
		padding: 8px 0;
		padding-bottom: 64px;

		a {
			color: inherit;
			text-decoration: none;
		}
	}
	.border {
		padding: 4px 8px;
		display: inline-block;
		box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
		-webkit-box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
		-moz-box-shadow: 1px 3px 10px 4px rgba(143, 127, 127, 0.55);
		cursor: pointer;
	}
	@media (min-width: 750px) {
		gap: 128px;
		flex-direction: row;

		.left {
			flex-basis: 50%;
		}
		.small-margin-top {
			margin-top: 0;
		}

		.split {
			display: flex;
			justify-content: space-between;
		}
		.right {
			flex-basis: 50%;
			h2 {
				font-size: 2rem;
			}

			p {
				font-weight: 300;
			}
		}

		.border-info {
			display: flex;
			gap: 16px;
			margin-top: 40px;
		}
	}
`;
