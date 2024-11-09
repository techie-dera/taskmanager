import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Suspense fallback={<div>loading...</div>}>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
