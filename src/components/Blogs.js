import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
	// consume data

	const { loading, posts } = useContext(AppContext);

	return (
		<div className=" w-11/12 max-w-[600px] p-3 flex flex-col items-center gap-7 my-[80px] ">
			{loading ? (
				<Spinner />
			) : posts.length === 0 ? (
				<div className="text-center font-bold text-4xl " >No Post Found</div>
			) : (
				posts.map((post) => <Card key={post.id} post={post} />)
			)}
		</div>
	);
};

export default Blogs;
