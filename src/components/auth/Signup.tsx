export default function Signup() {
  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-y-auto no-scrollbar">
        {/* Left illustration / marketing panel */}
        <div className="hidden lg:flex items-center justify-center bg-orange-300/90 p-10">
          <div className="max-w-md text-center text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">ElghaziStore — Where You Belong</h2>
            <img
              src="https://cdn.pixabay.com/photo/2020/07/08/15/24/cashier-5384210_1280.png"
              alt="Shopping illustration"
              className="mx-auto w-72 h-auto"
            />
            <p className="text-white/90">
              Explorez ElghaziStore. Commandez, payez et recevez où que vous soyez, sans surprise
            </p>
            <button className="px-6 py-3 rounded-xl bg-white text-slate-800 font-semibold shadow-sm hover:bg-white/90">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex items-start justify-start p-6 sm:p-10 pl-6 lg:pl-16">
          <div className="w-[500px] inline-flex flex-col items-start gap-6">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="w-full text-left text-4xl font-bold leading-10">Create an Account</div>
              <div className="w-full text-left text-neutral-600 text-lg leading-relaxed tracking-tight">
                Prêt(e) à faire vos meilleurs achats ? Créez votre compte maintenant !
              </div>
            </div>

            <form className="w-full flex flex-col gap-6">
              {/* Full name */}
              <label className="w-full flex flex-col gap-2 ">
                <span className="text-neutral-900 text-lg font-medium leading-relaxed tracking-tight">Full name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 "
                />
              </label>

              {/* Email */}
              <label className="w-full flex flex-col gap-2 ">
                <span className="text-neutral-900 text-lg font-medium leading-relaxed tracking-tight  ">Email</span >
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 "
                />
              </label>

              {/* Password */}
              <label className="w-full flex flex-col gap-2 ">
                <span className="text-neutral-900 text-lg font-medium leading-relaxed tracking-tight">Password</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 "
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-4 py-4 bg-emerald-300 text-white rounded-xl font-semibold tracking-tight hover:bg-emerald-400"
              >
                Sign Up
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

            {/* Already have account */}
            <div className="w-full flex justify-center items-center gap-1 h-7">
              <span className="text-neutral-900 text-lg font-medium leading-relaxed tracking-tight">
                Already have an account!
              </span>
              <a href="#" className="text-neutral-900 text-lg font-medium underline leading-relaxed tracking-tight">
                Log-in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
