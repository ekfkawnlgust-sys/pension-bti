const steps = ['Home', 'Quiz', 'Result'];

type StepFlowProps = {
  activeStep: 0 | 1 | 2;
};

export function StepFlow({ activeStep }: StepFlowProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-card">
      {steps.map((step, index) => (
        <div className="flex items-center gap-2" key={step}>
          <span
            className={`flex h-8 min-w-8 items-center justify-center rounded-full text-xs font-bold ${
              index <= activeStep ? 'bg-brand-700 text-white' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {index + 1}
          </span>
          <span className="hidden text-sm font-semibold text-slate-600 sm:inline">{step}</span>
          {index < steps.length - 1 ? <span className="h-px w-5 bg-slate-200 sm:w-8" /> : null}
        </div>
      ))}
    </div>
  );
}
