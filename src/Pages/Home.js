import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

const Home = () => {
	return (
		<div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center  ">
			<Header />
            <Blogs/>
			<Footer />
		</div>
	);
};

export default Home;
