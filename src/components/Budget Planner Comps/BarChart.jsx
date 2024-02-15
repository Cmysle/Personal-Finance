import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BChart({ incomeVsExpense }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={incomeVsExpense}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#002844" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#002844" />
        <YAxis stroke="#002844" />
        <Tooltip stroke="#002844" />
        <Legend />
        <Bar dataKey="Income" fill="#285773" />
        <Bar dataKey="Expense" fill="#002844" />
      </BarChart>
    </ResponsiveContainer>
  );
}
