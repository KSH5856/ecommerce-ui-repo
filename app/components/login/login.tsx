"use client";
import { loginService } from "@/app/service/authService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginComponent = () => {
  const route = useRouter();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      username: e.target.value,
    });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      password: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    await loginService(formValues);
    route.push("/ecommerce/home");
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Image Container */}
        <div className="w-1/2 h-full relative">
          <Image
            src="/images/login.png"
            className="object-cover rounded-xl"
            alt="Login Component"
            fill
          />
        </div>

        {/* Form Container */}
        <div className="flex items-center justify-center w-1/2">
          {/* Form */}
          <div className=" w-[60%] flex flex-col gap-y-16  justify-center">
            <h2>Welcome Back</h2>
            <div className="flex flex-col gap-y-7 w-full">
              {/* Username Input */}
              <div className="flex flex-col w-full">
                <div className="px-5 py-3">
                  <label>USERNAME</label>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={handleUsername}
                    className="m-0 w-full"
                    placeholder="Enter your username"
                  ></input>
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col w-full">
                <div className="px-5 py-3">
                  <label>PASSWORD</label>
                </div>
                <div>
                  <input
                    type="password"
                    onChange={handlePassword}
                    className="m-0 w-full"
                    placeholder="Enter your password"
                  ></input>
                </div>
              </div>

              {/* Submit Button */}
              <button className="mt-20" onClick={handleSubmit}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
