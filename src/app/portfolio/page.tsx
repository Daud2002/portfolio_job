export default function PortfolioPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-muted)]/60 p-4 hover:border-cyan-700/60 hover:shadow-[0_0_0_1px_theme(colors.cyan.700/.4)] transition-colors"
          >
            <div className="h-32 rounded-md bg-black/40 mb-3 ring-1 ring-inset ring-[color:var(--color-border)]" />
            <div className="font-medium">Project {idx + 1}</div>
            <div className="text-sm text-neutral-400">Short project description.</div>
          </div>
        ))}
      </div>
    </section>
  );
} 