"use client";
import React from "react";
import Link from "next/link";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoArrowForward,
} from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });
    console.log(data, error, "--- Sign In Response ---");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-orange-500/30"></span>
            <span className="text-orange-500 text-xs font-black uppercase tracking-[0.4em]">
              Solis Summer Shopping
            </span>
            <span className="h-0.5 w-8 bg-orange-500/30"></span>
          </div>
          <h1 className="text-5xl font-serif text-stone-900 tracking-tighter mb-2">
            Welcome Back
          </h1>
          <p className="text-stone-900/50 font-medium">
            Enter your details to access your account
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-stone-200 shadow-xl shadow-stone-200/50">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="text-stone-900 text-xs font-black uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400 group-focus-within:text-orange-500 transition-colors">
                  <IoMailOutline size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-stone-900 text-xs font-black uppercase tracking-widest">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-orange-500 text-[10px] font-black uppercase tracking-tighter hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400 group-focus-within:text-orange-500 transition-colors">
                  <IoLockClosedOutline size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-stone-900 text-stone-50 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all active:scale-[0.98] shadow-xl shadow-stone-200 mt-4"
            >
              Secure Login
              <IoArrowForward size={18} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-stone-900/50 text-sm font-medium">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-stone-900 font-black hover:text-orange-500 transition-colors underline decoration-orange-500/30 underline-offset-4"
              >
                Create one now
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-stone-900/40 text-xs font-bold uppercase tracking-[0.2em] hover:text-stone-900 transition-colors"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
