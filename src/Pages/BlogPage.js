/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";

const BlogPage = () => {
	const [blog, setBlog] = useState(null);
	const [relatedBlogs, setRelatedBlogs] = useState([]);
	const navigation = useNavigate();
	const location = useLocation();

	const blogId = location.pathname.split("/").at(-1);

	const { setLoading } = useContext(AppContext);

	async function fetchRelatedBlog() {
		setLoading(true);
		let url = `https://codehelp-apis.vercel.app/api/blogId=${blogId}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			setBlog(data.blog);
			setRelatedBlogs(data.relatedBlogs);
		} catch (e) {
			console.log(e);
			setBlog(null);
			setRelatedBlogs([]);
		}
		setLoading(false);
	}

	useEffect(() => {
		if (blogId) fetchRelatedBlog();
	}, [location.pathname]);

	return (
		<div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center  ">
			<Header />
			<div>
				<button onClick={() => navigation(-1)}>Back</button>
			</div>

			{blog ? (
				<div>
					<Card post={blog} />
					<h2>Related Blogs</h2>
					{relatedBlogs ? (
						relatedBlogs.map((blog) => (
							<Card key={blog.id} post={blog} />
						))
					) : (
						<p>No Related Blogs Found</p>
					)}
				</div>
			) : (
				<div>No Blog Found</div>
			)}

			<Blogs />
		</div>
	);
};

export default BlogPage;
