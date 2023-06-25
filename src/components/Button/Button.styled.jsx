import styled from 'styled-components';

export const LoadButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto 16px;
	padding: 8px 16px;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	color: #3d3a3a;
	text-shadow: 2px 2px 5px white;
	background-color:  #b1dfc1;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
	transform: scale(1);

	:hover,
	:focus {
		transform: scale(0.8);
	}
`;