export function SectionHeading({ title, centered = true }) {
  return (
    <div className={centered ? 'text-center' : 'text-left'}>
      <div className="mb-3 inline-flex items-center gap-3 text-[14px] font-semibold text-[var(--text-main)]">
        <span className="h-px w-8 bg-[var(--line)]" />
        <span>{title}</span>
        <span className="h-px w-8 bg-[var(--line)]" />
      </div>
    </div>
  );
}
