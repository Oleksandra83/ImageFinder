import PropTypes from 'prop-types';
import errorImg from '../../assets/error.png';
import { Wrapper, ErrorImage, Text } from './ImageError.styled';

export default function ImageError({ message }) {
	return (
		<Wrapper role="alert">
			<ErrorImage src={errorImg} width="180" alt="Jerry" />
			<Text>{message}</Text>
		</Wrapper>
	);
}

ImageError.propTypes = {
	message: PropTypes.string,
};