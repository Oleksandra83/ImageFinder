import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ children, type = 'button', onClick = null }) => {
	return (
		<LoadButton type={type} onClick={onClick}>
			{children}
		</LoadButton>
	);
};

LoadButton.propTypes = {
	type: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.any,
};