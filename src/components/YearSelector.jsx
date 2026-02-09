"use client";

import { useRouter, useSearchParams } from "next/navigation";

const START_YEAR = 2020;
const CURRENT_YEAR = new Date().getFullYear();

const AVAILABLE_YEARS = Array.from(
  { length: CURRENT_YEAR - START_YEAR + 1 },
  (_, i) => CURRENT_YEAR - i
);

export default function YearSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentYear = searchParams.get("year") || CURRENT_YEAR;

  return (
    <select
      value={currentYear}
      onChange={(e) => router.push(`?year=${e.target.value}`)}
      className="bg-[#020c1b] border border-cyan-500/40 text-cyan-400 px-4 py-2 rounded-lg"
    >
      {AVAILABLE_YEARS.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
