import { fetchReservationStats } from "@/utils/actions";
import React from "react";
import StatsCard from "../admin/StatsCard";
import { formatCurrency } from "@/utils/format";

const Stats = async () => {
  const stats = await fetchReservationStats();
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard title="properties" value={stats.properties} />
      <StatsCard title="nights" value={stats.nights} />
      <StatsCard title="amount" value={formatCurrency(stats.amount)} />
    </div>
  );
};

export default Stats;
