type MetricProps = {
  label: string;
  value: string;
  detail: string;
};

export function Metric({ label, value, detail }: MetricProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </div>
  );
}
