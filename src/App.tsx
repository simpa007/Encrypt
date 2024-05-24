import "./App.css";
// import { Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";
// import Home from "./component/Home";
// import Encrypt from "./component/Encrypt";
//import FileEncrypt from "./component/FileEncrypt";
import Decrypt from "./component/Decrypt";

function App() {
	return (
		<>
			<Header />
			{/* <FileEncrypt /> */}
			<Decrypt />
			{/* 
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/encrypt" element={<Encrypt />} />
			</Routes> */}
		</>
	);
}

export default App;
