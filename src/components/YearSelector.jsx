"use client";

import { useRouter, useSearchParams } from "next/navigation";

const START_YEAR = 2020;
const CURRENT_YEAR = new Date().getFullYear();

const AVAILABLE_PERIODS = Array.from(
  { length: CURRENT_YEAR - START_YEAR + 1 },
  (_, i) => {
    const year = CURRENT_YEAR - i;
    return `${year}-${year + 1}`;
  }
);

export default function PeriodSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPeriod = searchParams.get("period") || `${CURRENT_YEAR - 1}-${CURRENT_YEAR}`;

  return (
    <select
      value={currentPeriod}
      onChange={(e) => router.push(`?period=${e.target.value}`)}
      className="bg-[#020c1b] border border-cyan-500/40 text-cyan-400 px-4 py-2 rounded-lg"
    >
      {AVAILABLE_PERIODS.map((period) => (
        <option key={period} value={period}>
          {period}
        </option>
      ))}
    </select>
  );
}
