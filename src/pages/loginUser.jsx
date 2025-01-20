import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import assetheader from "../asset/p.jpg";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const userAction = () => {
    alert(isLogin ? "Login Successful!" : "Register Successful!");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: userAction,
    validationSchema: yup.object().shape({
      username: yup.string().when("isLogin", {
        is: false,
        then: yup.string().required("Username is required").min(5).max(10),
      }),
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Password must include uppercase, lowercase, number, and special character"
        ),
    }),
  });

  const handleFormChange = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${assetheader})` }}
      >
        <div className="max-h-full flex items-center rounded-md justify-center bg-gray-100">
          <div className="w-96 max-w-md bg-white shadow-md rounded-lg p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">
                {isLogin ? "Login" : "Register"}
              </h1>
              <p className="text-sm text-gray-500">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-red-600 hover:underline"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleFormChange}
                    className={`mt-1 block w-full rounded-md border p-2 ${
                      formik.errors.username
                        ? "border-red-500"
                        : "border-gray-300"
                    } shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                  />
                  {formik.errors.username && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.username}
                    </p>
                  )}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleFormChange}
                  className={`mt-1 block w-full rounded-l border p-2 ${
                    formik.errors.email ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                />
                {formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleFormChange}
                  className={`mt-1 block w-full rounded-md border p-2 ${
                    formik.errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
                />
                {formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
