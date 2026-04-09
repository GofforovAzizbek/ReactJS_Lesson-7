export function ProductCard({ product }) {
  return (
    <article className="group rounded-[2px] border border-[var(--card-border)] bg-[var(--surface)] p-3 shadow-[0_12px_28px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1">
      <div className={`flex h-[190px] items-center justify-center rounded-[2px] bg-gradient-to-br ${product.accent}`}>
        <span className="text-[90px] drop-shadow-sm">{product.emoji}</span>
      </div>
      <div className="-mt-4 ml-3 flex w-fit items-center border border-[var(--card-border)] bg-[var(--surface)] text-[var(--text-main)] shadow-sm">
        {['+', '♡', '◌'].map((icon, index) => (
          <button
            key={icon}
            type="button"
            className="flex h-8 w-8 items-center justify-center border-r border-[var(--card-border)] text-[18px] last:border-r-0 hover:bg-[var(--soft)] hover:text-[var(--accent)]"
            aria-label={`Product action ${index + 1}`}
          >
            {icon}
          </button>
        ))}
      </div>
      <div className="pt-4">
        <h3 className="text-[14px] text-[var(--muted)]">{product.title}</h3>
        <div className="mt-2 flex items-center gap-2 text-[14px] text-[var(--text-main)]">
          <span className="text-[22px] font-semibold leading-none text-[var(--muted)] line-through">{product.previousPrice}</span>
          <span className="text-[30px] font-bold leading-none">{product.price}</span>
          <span className="text-[15px] text-[var(--muted)]">{product.unit}</span>
        </div>
      </div>
    </article>
  );
}
