import React from 'react';
import PropTypes from 'prop-types';
import tomjerry from '../../assets/tomjerry.png';
import { Wrapper, Text, Hero } from './InitialStateGallery.styled';

export const InitialStateGallery = ({ text }) => {
	return (
		<Wrapper>
			<Text>{text}</Text>
			<Hero src={tomjerry} alt="Tom and Jerry" />
		</Wrapper>
	);
};

InitialStateGallery.propTypes = {
	text: PropTypes.string.isRequired,
};