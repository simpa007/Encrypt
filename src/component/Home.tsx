import { Link } from "react-router-dom";
const Home = () => {
	return (
		<section className="flex flex-col text-center mt-24">
			<div>
				<h1 className="text-3xl font-bold w-1/2 mx-auto">
					Encrypt and decrypt files without ever sending them to a server
				</h1>
				<p className="w-[40%] mx-auto text-lg mt-4">
					XFile is a free web app that allows you to encrypt and decrypt files
					with complete privacy. Your files are never sent to our servers, so no
					one can access them except for you.
				</p>
			</div>
			<div className="mt-8 space-x-4">
				<button className="bg-blue-600 py-2 px-4 rounded-xl text-white">
					<Link to="#">Get Started</Link>
				</button>
				<button className="bg-neutral-200 py-2 px-4 rounded-xl text-black">
					<Link to="#">Learn More</Link>
				</button>
			</div>
		</section>
	);
};

export default Home;
