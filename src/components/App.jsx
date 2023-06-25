import { useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from "./Layout/Layout";
import { notifyOptions } from "notify/notify";


export const App = () => {
	const [textSearch, setTextSearch] = useState('');
	const [page, setPage] = useState(1);

	const handleSearchSubmit = value => {
		if (value === textSearch) {
			return toast.warn(
				`We already found images for ${value.toUpperCase()}.
				Please, enter another phase`,
				notifyOptions
			);
		}
		setTextSearch(value);
		setPage(1);
	};

	const handleLoadMore = () => {
		setPage(prevState => prevState + 1);
	};

	return (
		<>
			<Searchbar onSubmit={handleSearchSubmit} />
			<Layout>
				<ImageGallery
					value={textSearch}
					page={page}
					onLoadMore={handleLoadMore} />
			</Layout>
			<ToastContainer transition={Slide} draggablePercent={60} />
		</>
	);
};
