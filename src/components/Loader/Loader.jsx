import {LoaderWrapper, StyledLoader} from './Loader.styled';

export const Loader = () => {
	return (
		<LoaderWrapper>
			<StyledLoader
				visible={true}
				height="80"
				width="80"
				ariaLabel="MagnifyingGlass-loading"
				wrapperStyle={{}}
				wrapperClass="MagnifyingGlass-wrapper"
				glassColor='#c0efff'
				color='#b95e13'
			/>
		</LoaderWrapper>
	);
};