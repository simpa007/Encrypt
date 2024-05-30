import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Auth0Provider
		domain="dev-g6snv8v2lzty6kkk.us.auth0.com"
		clientId="RoqL8E41jLdb01gS70zXyhIAP9wyIwJk"
		authorizationParams={{
			redirect_uri: "http://localhost:5173/home",
		}}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>
);
