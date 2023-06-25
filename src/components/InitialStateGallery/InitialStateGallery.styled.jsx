import styled from "styled-components";
export const Wrapper = styled.div`
	display: grid;
	grid-gap: 8px;
	place-content: center;
	margin: 1vh auto;
	padding: 4px 8px;
`;


export const Text = styled.p`
	margin: 0 auto;
	max-width: 80%;
	color: #9e5b03;
	text-shadow: 2px 2px 5px white;
	text-align: center;
	font-family: 'Dancing Script';
	font-size: 48px;
`;

export const Hero = styled.img`
	width: 25vw;
	height: auto;
	object-fit: contain;
	object-position: center;
	margin: 0 auto;
`;