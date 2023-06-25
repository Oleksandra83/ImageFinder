import styled from "styled-components";
import { MagnifyingGlass } from 'react-loader-spinner';

export const LoaderWrapper = styled.div`
	position: fixed;
	top:0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(185, 228, 201, 0.2);
	z-index: 1000;
	margin: 0 auto;
`;

export const StyledLoader = styled(MagnifyingGlass)`
	margin: 0 auto;
`;