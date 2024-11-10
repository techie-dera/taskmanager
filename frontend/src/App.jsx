import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register_Login from "./pages/Register_Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				{/* <Header /> */}
				<ToastContainer
					position={"top-right"}
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					stacked
					limit={3}
					toastStyle={{
						border: "1px solid #dadadaaa",
						textTransform: "capitalize",
					}}
				/>
				<Suspense fallback={<div>loading...</div>}>
					<Routes>
						<Route
							path="/"
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						/>
						<Route path="/login" element={<Register_Login />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
				{/* <Footer /> */}
			</BrowserRouter>
		</Provider>
	);
}

export default App;
