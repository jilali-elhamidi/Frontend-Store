export default function Login() {
  return (
    <div className="w-full h-screen bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-y-auto hide-scrollbar">
        {/* Left illustration / marketing panel */}
        <div className="hidden lg:flex items-start justify-center bg-[#9dcdbf] pt-16 pb-10 px-10">
          <div className="max-w-md text-center text-white space-y-6">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">ElghaziStore — Feel Welcome. Shop Easy</h1>
            <img
              src="https://cdn.pixabay.com/photo/2020/07/08/15/24/cashier-5384210_1280.png"
              alt="Shopping illustration"
              className="mx-auto w-72 h-auto"
            />
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex items-start justify-start p-6 sm:p-10 pl-6 lg:pl-16 pt-12 lg:pt-16">
          <div className="w-[500px] inline-flex flex-col items-start gap-6">
            <div className="w-full flex flex-col items-start gap-2">
              <div className="w-full text-left text-4xl font-bold leading-10">Welcome back</div>
              <div className="w-full text-left text-neutral-600 text-lg leading-relaxed tracking-tight">
                Welcome back! Please sign in to continue.
              </div>
            </div>

            <form className="w-full flex flex-col gap-6">
              {/* Email */}
              <label className="w-full flex flex-col gap-2">
                <span className="text-neutral-900 text-lg font-medium leading-relaxed tracking-tight">Email</span>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </label>

              {/* Password */}
              <label className="w-full flex flex-col gap-2">
                <span className="text-neutral-900 text-lg font-medium leading-relaxed tracking-tight">Password</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-4 py-4 bg-orange-300 text-white rounded-xl font-semibold tracking-tight hover:bg-orange-400"
              >
                Sign-In
              </button>

              {/* Divider */}
              <div className="w-full flex items-center gap-6 px-2.5">
                <div className="flex-1 h-px bg-neutral-300" />
                <span className="text-neutral-500">or</span>
                <div className="flex-1 h-px bg-neutral-300" />
              </div>

              {/* Google login */}
              <button
                type="button"
                className="w-full px-4 py-4 rounded-xl border border-neutral-300 inline-flex justify-center items-center gap-3 hover:bg-neutral-50"
              >
                <img
                  alt="Google"
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="w-6 h-6"
                />
                <span className="text-neutral-900 text-base font-medium leading-snug tracking-tight">Log in with Google</span>
              </button>
            </form>

            {/* Sign up link */}
            <div className="w-full flex justify-center items-center gap-1 h-7">
              <span className="text-neutral-900 text-lg font-medium leading-relaxed tracking-tight">
                Don’t have an account?
              </span>
              <a href="/pages/signup" className="text-neutral-900 text-lg font-medium underline leading-relaxed tracking-tight">
                Sign up for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
