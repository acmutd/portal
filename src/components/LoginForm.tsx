import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      className="flex flex-col justify-center gap-5 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="rounded-full h-8 p-5"
        type="email"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="rounded-full h-8 p-5"
        type="password"
        placeholder="Password"
        {...register("Password", { required: true })}
      />

      {/* <input
        className="rounded-full h-8 p-5 text-center bg-white dark:bg-black dark:text-white inline-flex items-center"
        type="submit"
      /> */}
      <button className="rounded-full h-8 p-5 bg-white dark:bg-black dark:text-white inline-flex items-center justify-center">
        Login
      </button>
      <button className="rounded-full h-8 p-5 bg-black dark:bg-white dark:text-black border dark:border-black inline-flex items-center justify-center">
        Sign Up
      </button>
      <div className="flex justify-between gap-3 mx-auto">
        <button className="rounded-full h-8 p-5 bg-white dark:bg-black dark:text-white inline-flex items-center justify-center">
          Google
        </button>
        <button className="rounded-full h-8 p-5 bg-white dark:bg-black dark:text-white inline-flex items-center justify-center">
          Github
        </button>
        <button className="rounded-full h-8 p-5 bg-white dark:bg-black dark:text-white inline-flex items-center justify-center">
          Discord
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
