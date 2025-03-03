import React, { useState } from "react";
import * as Label from "@radix-ui/react-label";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const Login = () => {
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call, validations)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <Label.Root
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </Label.Root>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <Label.Root
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </Label.Root>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-4 flex items-center">
          <Checkbox.Root
            id="remember"
            checked={remember}
            onCheckedChange={(checked) => setRemember(checked)}
            className="w-4 h-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {remember && (
              <Checkbox.Indicator>
                <CheckIcon className="w-3 h-3 text-blue-500" />
              </Checkbox.Indicator>
            )}
          </Checkbox.Root>
          <Label.Root htmlFor="remember" className="ml-2 text-sm text-gray-700">
            Remember me
          </Label.Root>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
