import React from "react";
import ReactDOM from "react-dom/client";
import CV from "./components/CV.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
        <Navbar />
		<CV/ >
        <Footer />
	</React.StrictMode>
);
