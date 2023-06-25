import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {ModalBackdrop, ModalContent, ModalPhoto, ModalDescr} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
	static propTypes = {
		modalData: PropTypes.shape({
			largeImageURL: PropTypes.string.isRequired,
			tags: PropTypes.string.isRequired,
		}),
		onModalClose: PropTypes.func,
	};

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleBackdropeClick);
	}

	handleKeyDown = e => {
		if (e.code === `Escape`) {
			this.props.onModalClose();
		}
	};

	handleBackdropeClick = e => {
		if (e.target === e.currentTarget) {
			this.props.onModalClose();
		}
	};

	render() {
		const { largeImageURL, tags } = this.props.modalData;

		return createPortal(
			<ModalBackdrop onClick={this.handleBackdropeClick}>
				<ModalContent>
					<ModalPhoto src={largeImageURL} alt={tags} />
					<ModalDescr>{tags}</ModalDescr>
				</ModalContent>
			</ModalBackdrop>,
			modalRoot
		);
	}
}
