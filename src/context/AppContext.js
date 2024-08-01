import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

// context creation - step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);

	const navigate = useNavigate();

	// data filling

	async function fetchBlogData(page = 1, tag = null, category) {
		let url = `${baseUrl}?page=${page}`;

		if (tag) {
			url += `&tag=${tag}`;
		} else if (category) {
			url += `&category=${category}`;
		}

		setLoading(true);

		try {
			const response = await fetch(url);
			const data = await response.json();

			// setting data
			setPage(data.page);
			setPosts(data.posts);
			setTotalPages(data.totalPages);
		} catch (e) {
			console.log(e);

			// whenever error bring back everything to intial stage
			setPage(1);
			setPosts([]);
			setTotalPages(null);
		}

		setLoading(false);
	}

	function handlePageChange(page) {
		setPage(page);

		// we'll go to given page number by changing url
		navigate({ search: `?page=${page}` });
	}

	const value = {
		posts,
		setPosts,
		loading,
		setLoading,
		page,
		setPage,
		totalPages,
		setTotalPages,
		fetchBlogData,
		handlePageChange,
	};

	// providing context - step 2
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
