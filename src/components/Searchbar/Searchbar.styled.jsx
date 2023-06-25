import styled from "styled-components";

export const Header = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1100;
	display: flex;
	justify-content: center;
	align-items: center;

	min-height: 64px;
	/* padding: 12px 24px; */
	color: #fff;
	background-color: #b1dfc1;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	backdrop-filter: blure(3.5px);
`;

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 400px;
	border-radius: 3px;
	overflow: hidden;
	background-color: rgb(255, 255, 255);
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const SearchFormBtn = styled.button`
	display: inline-block;
	width: 48px;
	height: 48px;
	border: 0;
	opacity: 0.6;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;

	:hover {
		opacity: 1;
	}

	svg {
		fill: #3d3a3a;
		stroke: #fff;
		transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

		:hover {
			transform: scale(1.2);
		}
	}
`;

export const SearchFormInput = styled.input`
	display: inline-block;
	width: 100%;
	font: inherit;
	font-size: 20px;
	border: none;
	outline: none;
	padding-left: 8px;
	padding-right: 8px;
	background-color: transparent;
	color: #3d3a3a;
	text-shadow: 2px 2px 5px white;

	::placeholder {
		font-weight: 400;
		color: #3d3a3a;
		text-shadow: 2px 2px 5px white;
		font-size: 18px;
	}
`;