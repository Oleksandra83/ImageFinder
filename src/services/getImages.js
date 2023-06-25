const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `35923777-83922d327ace7b1107788efbd`;

const getImages = (searchText, page = 1) => {
	return fetch(
		`${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
		// `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
	).then(response => {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(
			new Error(
				`Oops... there are no ${searchText} images matching your search...`
			)
		);
	});
};

const imageAPI = {
	getImages,
};

export default imageAPI;