import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";
import Home from "./component/Home";
import Encrypt from "./component/Encrypt";
// import FileEncrypt from "./component/FileEncrypt";
// import Decrypt from "./component/Decrypt";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
function App() {
	return (
		<>
			<Header />
			{/* <FileEncrypt />
			<Decrypt /> */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="encrypt" element={<Encrypt />} />
				<Route path="signin" element={<Signin />}></Route>
				<Route path="signup" element={<Signup />}></Route>
			</Routes>
		</>
	);
}

export default App;
