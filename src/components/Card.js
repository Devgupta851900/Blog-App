import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
	return (
		<div className="" key={post.id}>
			<NavLink to={`/blog/${post.id}`}>
				<p className=" font-bold hover:underline w-fit ">{post.title}</p>
			</NavLink>
			<p className=" text-[12px] tracking-wide ">
				By <span className=" italic ">{post.author}</span> On{" "}
				<NavLink to={`/category/${post.category?.replaceAll(" ", "-")}`}>
					<span className=" font-bold underline ">
						{post.category}
					</span>
				</NavLink>
			</p>
			<p className=" text-sm font-medium ">Posted On {post.date}</p>
			<p className=" text-sm mt-3 ">{post.content}</p>
			<div className=" flex flex-wrap justify-start text-blue-600 text-xs mt-1 underline font-bold ">
				{post.tags.map((tag, index) => {
					return (
						<NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
							<span
								className=" mr-2 "
								key={index}
							>{`#${tag}`}</span>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
