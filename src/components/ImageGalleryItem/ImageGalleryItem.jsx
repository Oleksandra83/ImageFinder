import { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, GallaryImage, ModalDescr, ModalPhoto } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export const ImageGallaryItem = ({ item }) => {
	const { largeImageURL, tags, webformatURL } = item;
	const [showModal, SetShowModal] = useState(false);

	const toggleModal = () => {
		SetShowModal(!showModal);
	};

	return (
		<>
			<ListItem className="gallery-item" aria-label="Zoom">
				<GallaryImage 
					onClick={toggleModal}
					src={webformatURL}
					alt={tags}
					loading="lazy"
				/>
			</ListItem>
			{showModal && (
				<Modal onModalClose={toggleModal}>
					{
						<>
							<ModalPhoto src={largeImageURL} alt={tags} />
							<ModalDescr>{tags}</ModalDescr>
						</>
					}
					</Modal>
			)}
		</>
	);
};

ImageGallaryItem.propTypes = {
	item: PropTypes.shape({
		tags: PropTypes.string.isRequired,
		webformatURL: PropTypes.string.isRequired,
		largeImageURL: PropTypes.string.isRequired,
	}).isRequired,
};
