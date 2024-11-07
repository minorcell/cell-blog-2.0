"use client";
import useNumberTicker from "@/app/hooks/useNumberTicker";

export default function NumberText() {
  function daysUntilStarted(): number {
    const startDate: Date = new Date(2024, 9, 15);
    const currentDate: Date = new Date();
    const diffInDays =
      (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    return Math.ceil(diffInDays);
  }

  return (
    <h3 className="text-3xl text-global flex items-center justify-center">
      小站已运行
      <span className="w-20 flex items-center justify-center gradient-text">
        {useNumberTicker(0, daysUntilStarted(), 2000)}
      </span>
      日
    </h3>
  );
}
