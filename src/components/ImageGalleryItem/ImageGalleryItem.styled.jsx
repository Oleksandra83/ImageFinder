import styled from "styled-components";

export const ListItem = styled.li`
border-radius: 8px;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
0px 4px 5px 0px rgba(0, 0, 0, 0.14),
0px 1px 10px 0px rgba(0, 0, 0, 0.12);
overflow: hidden;
transform: scale(1);
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
&:hover,
&:focus {
	transform: scale(1.01);
};
`;

export const GallaryImage = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`;
