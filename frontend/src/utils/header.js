const token = localStorage.getItem("token");
const getHeader = () => {
	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
};

export default getHeader;
