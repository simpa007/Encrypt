import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { BsEyeSlash } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const Signin = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<>
			<div className="mt-12 text-center">
				<h1 className="text-3xl font-bold">Sign In</h1>
				<p className="font-semibold mt-4">Welcome back, you've been missed!</p>
			</div>
			<div
				style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
				className="mt-4 w-[40%] mx-auto py-8 px-11 rounded-lg"
			>
				<form>
					<div className="flex justify-center space-x-8">
						<button className="flex flex-1 items-center space-x-4 py-2 px-6 bg-[#f6f7f8] rounded-lg">
							<FaGoogle />
							<span className="text-sm font-semibold">Log in with Google</span>
						</button>
						<button className="flex flex-1 items-center space-x-4 py-2 px-6 bg-[#f6f7f8] rounded-lg">
							<FaApple />
							<span className="text-sm font-semibold">Log in with Apple</span>
						</button>
					</div>
					<div className="my-8 text-center relative flex items-center">
						<div className="flex-grow border-t border-gray-200"></div>
						<span className="font-bold flex-shrink mx-4">OR</span>
						<div className="flex-grow border-t border-gray-200"></div>
					</div>
					<div>
						<div className="flex flex-col space-y-4">
							<div className="relative">
								<CiAt className="absolute top-3 left-3" />

								<input
									type="text"
									className="border border-neutral-300 py-2 outline-none pl-8 text-sm rounded-lg w-full"
								/>
							</div>
							<div className="relative">
								<GoLock className="absolute top-3 left-3" />
								<input
									type="password"
									className="border border-neutral-300 py-2 outline-none pl-8 text-sm rounded-lg w-full"
								/>
								<BsEyeSlash className="absolute bottom-3 right-3" />
							</div>
						</div>

						<div className="flex justify-between mt-4 mb-8">
							<div className="space-x-2">
								<input type="checkbox" className="border-2 text-sm" />
								<span className="text-sm">Remember me</span>
							</div>
							<div className="font-semibold text-sm">Forgot Password?</div>
						</div>

						<button
							onClick={() => loginWithRedirect()}
							className="w-full border py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-400"
						>
							Sign in
						</button>
					</div>
				</form>
				<p className="mt-8 font-semibold text-sm text-center">
					You haven't any account?{" "}
					<span className="text-blue-600 ml-3">
						<Link to="/signup">Sign up</Link>
					</span>
				</p>
			</div>
		</>
	);
};

export default Signin;
