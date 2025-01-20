import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import assetheader from "../asset/header.png";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "", // For Sign Up only
    phoneNumber: "", // For Sign Up only
  });
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirect if already logged in
    }
  }, [navigate]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? "http://localhost:3000/login"
      : "http://localhost:3000/register";

    // Prepare form data for registration and login
    const requestData = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          username: formData.name,
          email: formData.email,
          password: formData.password,
          fullName: formData.name,
          phoneNumber: formData.phoneNumber,
        };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Check if response is okay (status 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong");
        return;
      }

      const data = await response.json();
      console.log("Response from backend:", data);

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Redirect to dashboard after successful login or registration
      if (isLogin) {
        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        navigate("/home"); // Redirect to login page after registration
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${assetheader})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left -mt-16 mb-20">
          <img src="/src/asset/logo4.png" alt="" />
          <h1 className="text-5xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </div>
            <p className="text-center mt-4">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={toggleForm}
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={toggleForm}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
