"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/lib/api";
import { IPayment, IWithdrawal } from "@/lib/types";
import { toast } from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function PaymentHistory() {
  const { user, refreshUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const sessionId = searchParams.get("session_id");
  const confirmationStarted = useRef(false);
  const [payments, setPayments] = useState<IPayment[]>([]);
  const [withdrawals, setWithdrawals] = useState<IWithdrawal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    if (user.role === "creator") {
      api
        .get<{ withdrawals: IWithdrawal[] }>("/withdrawals/my")
        .then((r) => setWithdrawals(r.withdrawals))
        .catch(() => toast.error("Failed to load withdrawal history"))
        .finally(() => setLoading(false));
      return;
    }
    const loadPayments = async () => {
      try {
        if (paymentStatus === "success" && sessionId && !confirmationStarted.current) {
          confirmationStarted.current = true;
          await api.post("/payments/confirm", { sessionId });
          await refreshUser();
          toast.success("Payment successful. Credits added.");
          router.replace("/dashboard/payment-history");
        }
        const response = await api.get<{ payments: IPayment[] }>("/payments/my");
        setPayments(response.payments);
      } catch (error) {
        toast.error((error as Error).message || "Failed to confirm payment");
      } finally {
        setLoading(false);
      }
    };
    loadPayments();
  }, [user, paymentStatus, sessionId, refreshUser, router]);

  const isCreator = user?.role === "creator";

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-slate-800">Payment History</h1>
      <p className="mt-1 text-slate-500">
        {isCreator ? "Your creator withdrawal payments." : "Your credit purchases and transactions."}
      </p>

      {loading ? (
        <p className="mt-8 text-slate-400">Loading...</p>
      ) : isCreator ? (
        withdrawals.length === 0 ? (
          <p className="mt-8 text-slate-400">No withdrawal payments yet.</p>
        ) : (
          <div className="mt-6 overflow-x-auto card-surface">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Credits</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Account</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {withdrawals.map((withdrawal) => (
                  <tr key={withdrawal._id}>
                    <td className="px-4 py-3 text-slate-600">{new Date(withdrawal.withdrawDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3 font-medium text-slate-800">{withdrawal.withdrawalCredit}</td>
                    <td className="px-4 py-3">${withdrawal.withdrawalAmount}</td>
                    <td className="px-4 py-3">{withdrawal.paymentSystem}</td>
                    <td className="px-4 py-3">{withdrawal.accountNumber}</td>
                    <td className="px-4 py-3 capitalize">{withdrawal.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : payments.length === 0 ? (
        <p className="mt-8 text-slate-400">No payments yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto card-surface">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-500">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Credits</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Transaction</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payments.map((p) => (
                <tr key={p._id}>
                  <td className="px-4 py-3 text-slate-600">{new Date(p.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 font-medium text-slate-800">{p.credits}</td>
                  <td className="px-4 py-3">${p.amount}</td>
                  <td className="px-4 py-3">{p.paymentSystem}</td>
                  <td className="px-4 py-3 text-xs text-slate-400">{p.transactionId}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
