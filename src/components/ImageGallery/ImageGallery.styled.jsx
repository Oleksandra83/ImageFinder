import styled from 'styled-components';

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 20px;
	place-content: center;
	max-width: calc(100vw - 48px);
	margin: 1vh auto;
	padding: 4px 8px;
`;