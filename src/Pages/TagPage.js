import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

const TagPage = () => {
	const navigation = useNavigate();
	const location = useLocation();
	const tag = location.pathname.split("/").at(-1);

	return (
		<div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center   ">
			<Header />
			<div className=" w-11/12 max-w-[600px] p-4 mb-[-80px] mt-[100px] flex justify-start items-center ">
				<button
					className=" rounded-md border border-slate-400 py-1 px-3  "
					onClick={() => navigation(-1)}
				>
					Back
				</button>
				<h2 className=" text-xl ml-2 font-bold ">
					Blog Tagged{" "}
					<span className=" text-blue-700 underline ">#{tag}</span>
				</h2>
			</div>
			<Blogs />
			<Footer />
		</div>
	);
};

export default TagPage;
