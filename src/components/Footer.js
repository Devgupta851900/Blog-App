import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
	const { page, totalPages, handlePageChange } = useContext(AppContext);

	return (
		<div className="border shadow-md w-full flex justify-center fixed bg-white bottom-0 font-bold ">
			<div className=" w-11/12 max-w-[600px] px-4 flex justify-between py-4 ">
				<div className=" flex gap-2 ">
					{page > 1 && (
						<button
							className=" rounded-md border border-slate-400 py-1 px-3 "
							onClick={() => {
								handlePageChange(page - 1);
							}}
						>
							Previous
						</button>
					)}
					{page < totalPages && (
						<button
							className=" rounded-md border border-slate-400 py-1 px-3 "
							onClick={() => {
								handlePageChange(page + 1);
							}}
						>
							Next
						</button>
					)}
				</div>

				<p className="">
					Page {page} of {totalPages ? totalPages : 1}
				</p>
			</div>
		</div>
	);
};

export default Footer;
