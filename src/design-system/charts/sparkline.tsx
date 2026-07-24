"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

export interface SparklineProps<T extends object> {
  data: T[];
  dataKey: keyof T & string;
  height?: number;
}

export function Sparkline<T extends object>({
  data,
  dataKey,
  height = 40,
}: SparklineProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke="currentColor"
          strokeWidth={2}
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
