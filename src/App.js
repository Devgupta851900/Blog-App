import React, { useEffect, useContext } from "react";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

const App = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	const { fetchBlogData } = useContext(AppContext);

	useEffect(() => {
		const page = searchParams.get("page") ?? 1;

		if (location.pathname.includes("tags")) {
			// iska mtlb tag wala page show krna hee
			// hum tag nikal rhe h pathname string mese jo ki last me baitha h , agr usme - present h to usko space s replace krrhe h
			const tag = location.pathname
				.split("/")
				.at(-1)
				.replaceAll("-", " ");

			// iss "tag" aur "page"  ke liye data fetch krrhe h
			fetchBlogData(Number(page), tag);
		} else if (location.pathname.includes("category")) {
			// same as above for category
			const category = location.pathname
				.split("/")
				.at(-1)
				.replaceAll("-", " ");

			fetchBlogData(Number(page), null, category);
		} else {
			// neither for tag nor for category means a normal call
			fetchBlogData(Number(page));
		}
	}, [location.pathname, location.search]);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog/:blogId" element={<BlogPage />} />
				<Route path="/tags/:tag" element={<TagPage />} />
				<Route
					path="/category/:category"
					element={<CategoryPage />}
				/>
			</Routes>
		</div>
	);
};

export default App;
