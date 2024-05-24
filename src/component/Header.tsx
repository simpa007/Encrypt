import { Link } from "react-router-dom";
import { BsDatabaseFill } from "react-icons/bs";

export const Header = () => {
	return (
		<header className="container-full px-16 py-3 border-b mx-auto flex justify-between ">
			<div className="flex items-center space-x-3 text-xl font-semibold">
				<BsDatabaseFill />
				<span>XFile</span>
			</div>
			<div className="flex items-center space-x-8 text-sm ">
				<Link to="Home" className="hover:text-blue-600">
					Home
				</Link>
				<Link to="Help" className="hover:text-blue-600">
					Help
				</Link>
				<Link to="Pricing" className="hover:text-blue-600">
					Pricing
				</Link>
				<button className="bg-blue-600 py-2 px-4 rounded-xl text-white hover:bg-blue-200 hover:text-black">
					<Link to="sign-in">Sign in</Link>
				</button>
			</div>
		</header>
	);
};
