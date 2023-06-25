import PropTypes from 'prop-types';
import { ListItem, GallaryImage } from './ImageGalleryItem.styled';

export const ImageGallaryItem = ({ item, onClickImage }) => {
	const { largeImageURL, tags, webformatURL } = item;

	return (
		<ListItem className="gallery-item" onClick={e => {
			e.preventDefault(); onClickImage({ largeImageURL, tags });
		}}
		>
			<div>
				<GallaryImage src={webformatURL} alt={tags} loading="lazy" />
			</div>
		</ListItem>
	);
};

ImageGallaryItem.propTypes = {
	item: PropTypes.shape({
		tags: PropTypes.string.isRequired,
		webformatURL: PropTypes.string.isRequired,
		largeImageURL: PropTypes.string.isRequired,
	}).isRequired,
	onClickImage: PropTypes.func.isRequired,
};
