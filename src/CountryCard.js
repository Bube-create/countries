import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CountryCard = ({ country }) => {
	return (
		<Country>
			{country && (
				<Link to={`/country/${country.name.common}`}>
					<div>
						<img src={country.flags.png} alt="" />

						<div className="card-info">
							<h3>{country.name.common}</h3>
							<p>
								<span className="card-info__text">
									population:
								</span>{" "}
								{country.population}
							</p>
							<p>
								<span className="card-info__text">
									region:{" "}
								</span>
								{country.region}
							</p>
							<p>
								<span className="card-info__text">
									capital:{" "}
								</span>
								{country.capital}
							</p>
						</div>
					</div>
				</Link>
			)}
		</Country>
	);
};

export default CountryCard;

const Country = styled.div`
	background: var(--element-background);
	border-radius: 4px;
	overflow: hidden;
	height: 350px;
	max-height: 350px;
	a {
		color: inherit;
		text-decoration: none;
	}
	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.card-info {
		padding: 16px;
		p {
			font-weight: 500;
		}
		.card-info__text {
			text-transform: capitalize;
		}
		@media (min-width: 1000px) {
			padding-left: 24px;
			padding-top: 24px;
		}
	}
`;
