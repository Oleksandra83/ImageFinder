import styled from "styled-components";

export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1200 ;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 4px;
	width: 65vw;
	height: 650px;
	background-color: #f8eed7;
	border-radius: 2px;
	box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;