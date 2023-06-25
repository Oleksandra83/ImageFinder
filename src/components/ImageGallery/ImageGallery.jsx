import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import imagesAPI from 'services/getImages';
import { ImageGallaryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import DefaultImg from 'assets/tjer.png';
import { Loader } from '../Loader/Loader';
import { List } from './ImageGallery.styled';
import ImageError from '../ImageError/ImageError';
import { InitialStateGallery } from '../InitialStateGallery/InitialStateGallery';
import { Button } from '../Button/Button';

const Status = {
	IDLE: 'idle',
	PENDING: 'pending',
	RESOLVED: 'resolved',
	REJECTED: 'rejected',
};

export const ImageGallery = ({ value, page, onLoadMore }) => {
	const [images, setImages] = useState([]);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState(Status.IDLE);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		if (!value) {
			return;
		}
		if (page === 1) {
			setImages([]);
		}
		setStatus(Status.PENDING);

		imagesAPI
			.getImages(value, page)
			.then(images => {
				setImages(prevState => [...prevState, ...images.hits]);
				setStatus(Status.RESOLVED);
				setTotalPages(Math.floor(images.totalHits / 12));
			})
			.catch(error => {
				setError(error);
				setStatus(Status.REJECTED);
			});
	}, [value, page, onLoadMore]);

	if (status === Status.IDLE) {
		return <InitialStateGallery text="Let's find images together!" />;
	}
	
	if (status === Status.PENDING) {
		return (
			<>
				<List>
					{images.map(image => (
						<ImageGallaryItem key={image.id} item={image} />
					))}
				</List>
				<Loader />;
			</>
		);
	}

	if (status === Status.REJECTED) {
		return <ImageError message={error.message} />;
	}
	if (images.length === 0) {
		return <ImageError
			message={`Oops... there are no images matching your search...`}
		/>;
	}
	
	if (status === Status.RESOLVED) {
		return (
			<>
				<List>
					{images.map(image => (
						<ImageGallaryItem
							key={image.id}
							item={image} />
					))}
				</List>
				{images.length > 0 &&
					status !== Status.PENDING &&
					page <= totalPages && <Button onClick={onLoadMore}>Load More</Button>}
			</>
		);
	}
};

ImageGallery.propTypes = {
	value: PropTypes.string.isRequired,
	page: PropTypes.number.isRequired,
	onLoadMope: PropTypes.func.isRequired,
};