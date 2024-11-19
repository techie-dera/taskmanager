import { useDispatch } from "react-redux";
import getHeader from "../utils/header";
import { toast } from "react-toastify";
import { useEffect } from "react";
import {
	setBacklog,
	setTodo,
	setInProgress,
	setDone,
} from "../redux/slices/taskSlice";
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
					dispatch(setBacklog(json.data.backlog));
					dispatch(setTodo(json.data.todo));
					dispatch(setInProgress(json.data.inProgress));
					dispatch(setDone(json.data.done));
				} else {
					console.log(json?.message);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);
};

export default useAllTask;
