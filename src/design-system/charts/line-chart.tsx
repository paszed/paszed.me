"use client";

import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface LineChartProps<T extends object> {
  data: T[];
  xKey: keyof T & string;
  yKey: keyof T & string;
  height?: number;
  showGrid?: boolean;
}

export function LineChart<T extends object>({
  data,
  xKey,
  yKey,
  height = 320,
  showGrid = true,
}: LineChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}

        <XAxis dataKey={String(xKey)} />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey={String(yKey)}
          stroke="currentColor"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 5 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
