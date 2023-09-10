import React, { useState } from "react";
import * as yup from "yup";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLoginMutation } from "../../../../redux/api/authApi";
import { setAuthData } from "../../../../redux/slice/authSlice";

const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  const { formState, register, handleSubmit } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formData) => {
    const { username, password } = formData;
    const { data, error } = await login({ data: { username, password } });
    if (!error) {
      const { session, ...userData } = data.login;
      dispatch(setAuthData({ user: userData, sessionId: session }));
    }
  };

  return (
    <div>
      <div className="login__page flex items-center justify-center min-h-screen w-screen py-[50px] h-screen overflow-hidden md:overflow-y-auto md:h-auto">
        <img
          className="fixed top-0 left-0 w-screen h-screen object-cover object-center"
          src="/images/login__new__bg.png"
          alt=""
        />
        <div className="flex flex-wrap w-[970px] max-w-full relative z-[9] mx-auto">
          <div className="md:order-[-1] mx-auto">
            <div className="relative top-0 py-[50px] px-[40px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-[24px] lg:py-[35px] lg:px-[25px] md:before:h-full md:before:rounded-[12px]">
              <div className="relative z-[4]">
                <>
                  <div className="mb-[40px]">
                    <p className="text-[30px] font-biotif__SemiBold text-primaryColor lg:text-[26px]">
                      Login to your account
                    </p>
                  </div>
                </>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label
                      className="block text-grey-darker mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className={classNames(
                        "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3",
                        { "border-red-500": formState.errors.username }
                      )}
                      id="username"
                      type="text"
                      placeholder="Username"
                      {...register("username")}
                    />
                    {formState.errors.username && (
                      <p className="text-red-500 text-xs italic">
                        Please choose a username.
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-grey-darker mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="w-full relative">
                      <div
                        class="absolute mt-[7px] right-0 flex items-center px-2"
                        onClick={() => setShowPass(!showPass)}
                      >
                        <input
                          class="hidden js-password-toggle"
                          id="toggle"
                          type="checkbox"
                        />
                        <label
                          key={showPass}
                          class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                          for="toggle"
                        >
                          {!showPass ? "show" : "hide"}
                        </label>
                      </div>
                      <input
                        className={classNames(
                          "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 pr-16",
                          { "border-red-500": formState.errors.password }
                        )}
                        id="password"
                        type={!showPass ? "password" : "text"}
                        placeholder="******************"
                        {...register("password")}
                      />
                    </div>
                    {formState.errors.password && (
                      <p className="text-red-500 text-xs italic">
                        Please choose a password.
                      </p>
                    )}
                    <div className="input-item mb-4 text-center pt-5">
                      <button
                        disabled={isLoading}
                        className={
                          "w-full h-[56px] flex items-center justify-center bg-[#FF8F03] rounded-[8px] text-[20px] font-biotif__Bold text-[#ffffff] uppercase hover:bg-[#265373]"
                        }
                      >
                        {isLoading && <div className="loader mr-2"></div>} Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
