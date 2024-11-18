import { useDispatch } from "react-redux";
import getHeader from "../utils/header";
import { toast } from "react-toastify";
import { useEffect } from "react";
const useAllTask = () => {
	const dispatch = useDispatch();
	const fetchData = () => {
		fetch(`${import.meta.env.VITE_BACKEND_URL}/api/task/all`, {
			method: "GET",
			headers: getHeader(),
		})
			.then((response) => response.json())
			.then((json) => {
				if (json?.message === "success") {
					console.log(json.data);
				} else {
					toast.error(json?.message);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error("Something went wrong");
			});
	};

	useEffect(() => {
		fetchData();
	}, []);
};

export default useAllTask;
