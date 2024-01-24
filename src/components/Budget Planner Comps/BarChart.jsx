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

const data = [
  {
    name: "Date",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Date",
    Expense: 3000,
    Income: 1398,
  },
  {
    name: "Date",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Date",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "Date",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Date",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "Date",
    Expense: 3490,
    Income: 4300,
  },
];

export default function BChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
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
