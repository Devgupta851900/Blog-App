import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

const CategoryPage = () => {
	const navigation = useNavigate();
	const location = useLocation();
	const category = location.pathname.split("/").at(-1);

	return (
		<div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center  ">
			<Header />
			<div className=" w-11/12 max-w-[600px] flex items-center mt-[80px] mb-[-80px] ">
				<button
					className=" rounded-md border border-slate-400 py-1 px-3  "
					onClick={() => navigation(-1)}
				>
					Back
				</button>
				<h2 className=" text-xl font-bold ml-2 ">
					Blogs On{" "}
					<span className=" text-blue-700 underline ">
						{category}
					</span>
				</h2>
			</div>
			<Blogs />
			<Footer />
		</div>
	);
};

export default CategoryPage;
