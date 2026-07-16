"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import { DASHBOARD_NAV } from "@/lib/constants";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { token, user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
  const roleRoutes = user ? DASHBOARD_NAV[user.role] ?? [] : [];
  const roleHome = roleRoutes[0]?.href ?? "/dashboard";
  const hasRouteAccess =
    pathname === "/dashboard" ||
    roleRoutes.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  useEffect(() => {
    if (!token && !loading) {
      router.replace("/login");
    } else if (token && user && !hasRouteAccess) {
      router.replace(roleHome);
    } else if (token && user) {
      // Use a microtask to avoid synchronous setState in effect body
      Promise.resolve().then(() => setChecked(true));
    }
  }, [token, user, loading, hasRouteAccess, roleHome, router]);

  if (!token || !user || !checked || !hasRouteAccess) {
    return (
      <div className="grid min-h-screen place-items-center text-slate-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>

      {/* Mobile top bar */}
      <div className="flex min-w-0 flex-1 flex-col">
        <MobileDashHeader />
        <div className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}

function MobileDashHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 bg-white md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-extrabold text-gradient">FundHorizon</span>
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100">
          <DashboardSidebar onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
