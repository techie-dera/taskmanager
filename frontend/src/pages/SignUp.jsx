import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkValidSignUpFrom } from "../utils/validate";
import { PiEye, PiEyeClosedLight } from "react-icons/pi";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");
	const [load, setLoad] = useState("");
	const [isShow, setIsShow] = useState(false);
	const [isShowC, setIsShowC] = useState(false);
	const navigate = useNavigate();

	const signUpUser = (e) => {
		// Signup ---
		toast.loading("Wait until you SignUp");
		e.target.disabled = true;
		fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
			}),
		})
			.then((response) => response.json())
			.then((json) => {
				setLoad("");
				e.target.disabled = false;
				toast.dismiss();
				if (json.token) {
					navigate("/signin");
					toast.success(json?.message);
				} else {
					toast.error(json?.message);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				setLoad("");
				toast.dismiss();
				toast.error("Error : " + error.code);
				e.target.disabled = false;
			});
	};
	const handleSignup = (e) => {
		if (name && email && password) {
			const validError = checkValidSignUpFrom(name, email, password);
			if (validError) {
				toast.error(validError);
				return;
			}
			if (password != cpassword) {
				toast.error("Passwords do not match");
				return;
			}
			setLoad("Loading...");
			signUpUser(e);
		} else {
			toast.error("All fields are required");
		}
	};
	const handleName = (name) => {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		setName(name);
	};
	return (
		<div className="">
			<div className="">
				<h2 className="">Register</h2>
				<form className="">
					<input
						className=""
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => handleName(e.target.value)}
						required
					/>
					<input
						className=""
						type="email"
						placeholder="Email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<div className="">
						<input
							className=""
							type={isShow ? "text" : "password"}
							placeholder="Password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span onClick={() => setIsShow(!isShow)} className="">
							{isShow ? (
								<PiEyeClosedLight fontSize={22} />
							) : (
								<PiEye fontSize={22} />
							)}
						</span>
					</div>
					<div className="">
						<input
							className=""
							type={isShowC ? "text" : "password"}
							placeholder="Confirm Password"
							value={cpassword}
							onChange={(e) => setCPassword(e.target.value)}
						/>
						<span onClick={() => setIsShowC(!isShowC)} className="">
							{isShowC ? (
								<PiEyeClosedLight fontSize={22} />
							) : (
								<PiEye fontSize={22} />
							)}
						</span>
					</div>
					<button
						onClick={(e) => {
							e.preventDefault();
							handleSignup(e);
						}}
						className=""
					>
						{load == "" ? "Register" : load}
					</button>
					<div className="">
						<p>Have an account ?</p>
						<Link to="/signin">
							<div className="">Login</div>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
