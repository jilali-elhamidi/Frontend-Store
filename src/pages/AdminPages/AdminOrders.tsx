"use client";

import { useEffect, useState } from "react";
import DashboardSidebar from "../../components/Admin/DashboardSidebar";
import RecentPurchases from "../../components/Admin/Order/RecentPurchases";

export default function AdminOrdersPage() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // 🌙 Initialisation du thème
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const preferDark = saved ? saved === "dark" : false;
    setIsDark(preferDark);
    if (preferDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  const frameBg = isDark ? "bg-slate-800" : "bg-slate-50";
  const cardBg = isDark ? "bg-slate-900/40" : "bg-teal-50";
  const textMain = isDark ? "text-white" : "text-black";
  const textSub = isDark ? "text-slate-300" : "text-neutral-800";

  const rows = [
    {
      id: "#25426",
      date: "Nov 8th,2023",
      name: "Kavin",
      status: "Delivered",
      statusDot: "bg-emerald-200",
      amt: "₹200.00",
      avatarUrl: "https://i.pravatar.cc/48?u=kavin",
    },
    {
      id: "#25425",
      date: "Nov 7th,2023",
      name: "Komael",
      status: "Canceled",
      statusDot: "bg-orange-400",
      amt: "₹200.00",
      avatarUrl: "https://i.pravatar.cc/48?u=komael",
    },
    {
      id: "#25424",
      date: "Nov 6th,2023",
      name: "Nikhil",
      status: "Delivered",
      statusDot: "bg-emerald-200",
      amt: "₹200.00",
      avatarUrl: "https://i.pravatar.cc/48?u=nikhil",
    },
    {
      id: "#25423",
      date: "Nov 5th,2023",
      name: "Shivam",
      status: "Canceled",
      statusDot: "bg-orange-400",
      amt: "₹200.00",
      avatarUrl: "https://i.pravatar.cc/48?u=shivam",
    },
    {
      id: "#25422",
      date: "Nov 4th,2023",
      name: "Shadab",
      status: "Delivered",
      statusDot: "bg-emerald-200",
      amt: "₹200.00",
      avatarUrl: "https://i.pravatar.cc/48?u=shadab",
    },
  ];

  return (
    <main className="home-zoom">
      <div className={isDark ? "dark" : ""}>
        <div className={`w-screen lg:w-351 min-h-screen ${frameBg}`}>
          <div className="flex flex-col lg:flex-row w-full min-h-full">
            {/* ✅ Sidebar desktop */}
            <aside className="hidden lg:block">
              <DashboardSidebar isDark={isDark} active="order" />
            </aside>

            {/* ✅ Sidebar mobile */}
            {mobileOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setMobileOpen(false)}
                  aria-hidden="true"
                />
                <div
                  className={`absolute left-0 top-0 h-full w-72 max-w-[85%] ${
                    isDark ? "bg-slate-800" : "bg-white"
                  } shadow-xl`}
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      Menu
                    </span>
                    <button
                      className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                      onClick={() => setMobileOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`h-5 w-5 ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        <path d="M6 6l12 12M6 18L18 6" />
                      </svg>
                    </button>
                  </div>
                  <DashboardSidebar isDark={isDark} active="order" />
                </div>
              </div>
            )}

            {/* ✅ Main content */}
            <main className="flex-1 p-3 lg:p-6 flex flex-col gap-4">
              {/* 🔹 Top bar */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => setMobileOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`h-5 w-5 ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                </button>
                <h1
                  className={`text-lg sm:text-xl font-semibold ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  Orders
                </h1>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="ml-auto inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  {isDark ? "☀️" : "🌙"}
                  <span className="hidden sm:inline">
                    {isDark ? "Light" : "Dark"}
                  </span>
                </button>
              </div>

              {/* 🔹 Header section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col">
                  <div
                    className={`text-xl sm:text-2xl font-semibold ${textMain}`}
                  >
                    Orders List
                  </div>
                  <div className={`opacity-80 ${textSub} text-sm sm:text-base`}>
                    Home &gt; Order List
                  </div>
                </div>

                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 ${textSub}`}
                >
                  <div className="inline-flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 ${
                        isDark ? "text-slate-300/90" : "text-neutral-800"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />
                      <path d="M16 3v4M8 3v4M3 11h18" />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Feb 16,2022 - Feb 20,2022
                    </span>
                  </div>

                  <div
                    className={`w-full sm:w-56 p-3 ${cardBg} rounded-lg flex justify-between items-center`}
                  >
                    <span className="text-sm font-semibold">
                      Change Status
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-4 h-4 ${
                        isDark ? "text-slate-300/80" : "text-neutral-800"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="23 4 23 10 17 10" />
                      <polyline points="1 20 1 14 7 14" />
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
                      <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 🔹 Table responsive */}
              <div className="w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 mt-3">
                <RecentPurchases
                  isDark={isDark}
                  rows={rows}
                  className="sm:min-w-[720px]"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
