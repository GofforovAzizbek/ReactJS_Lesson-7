import { useI18n } from "../../i18n/useI18n";
import { categoryItems } from "../../utils/siteData";

export function HeroSection() {
  const { t, language } = useI18n();

  const highlightWord = language === "uz" ? "Hammasi" : "Breakfast";
  const plainText =
    language === "uz"
      ? t("hero.titleBottom").replace("Hammasi", "").trim()
      : t("hero.titleBottom").replace("Breakfast", "").trim();

  return (
    <section
      id="home"
      className="relative overflow-visible bg-[var(--surface)] pb-28 pt-8 lg:pb-40 lg:pt-14"
    >
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 max-w-[560px] pt-6 lg:pt-2">
            <div className="mb-8 ml-4 text-[28px] leading-none text-[var(--accent)]">
              ⌁
            </div>
            <h1 className="text-[48px] font-semibold leading-[1.12] tracking-[-0.04em] text-[var(--text-main)] sm:text-[60px] lg:text-[72px]">
              {t("hero.titleTop")}
              <br />
              <span className="inline-block pt-5">
                {plainText}{" "}
                <span className="relative inline-block text-[var(--pink)]">
                  {highlightWord}
                  <span className="absolute bottom-2 left-0 -z-10 h-4 w-full bg-[var(--highlight)]" />
                </span>
              </span>
            </h1>
            <div className="mt-8 flex items-start gap-6">
              <button
                type="button"
                className="hidden h-12 w-12 shrink-0 items-center justify-center border border-[var(--accent)] text-[24px] text-[var(--accent)] lg:flex"
              >
                ‹
              </button>
              <p className="max-w-[520px] text-[17px] leading-8 text-[var(--muted)]">
                {t("hero.description")}
              </p>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#shop"
                className="inline-flex min-w-[140px] justify-center bg-[var(--accent)] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.03em] text-white transition hover:translate-y-[-1px] hover:bg-[var(--accent-strong)]"
              >
                {t("hero.buyNow")}
              </a>
              <a
                href="#products"
                className="inline-flex min-w-[140px] justify-center border border-[var(--accent)] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.03em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                {t("hero.seeMore")}
              </a>
              <div className="ml-12 hidden text-[70px] leading-none text-[var(--accent)] lg:block">
                ✳
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[700px] items-center justify-center lg:justify-end">
            <button
              type="button"
              className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-[var(--accent)] text-[24px] text-[var(--accent)] lg:flex"
            >
              ‹
            </button>
            <div className="relative h-[320px] w-full max-w-[640px] sm:h-[420px] lg:h-[500px]">
              <div className="absolute inset-y-[8%] right-[5%] w-[86%] rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(248,112,147,0.14),transparent_64%)] blur-2xl" />

              <div className="absolute right-[-1%] top-[22%] h-[10px] w-[52%] rotate-[12deg] rounded-full bg-[#181818] shadow-[0_4px_14px_rgba(0,0,0,0.18)] sm:h-[12px]" />
              <div className="absolute right-[-2%] top-[73%] h-[10px] w-[58%] rotate-[12deg] rounded-full bg-[#181818] shadow-[0_4px_14px_rgba(0,0,0,0.18)] sm:h-[12px]" />

              <div className="absolute right-[14%] top-[7%] flex h-[230px] w-[230px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffba57_0,#ff9f1c_22%,#ff7a00_48%,#ff5f00_74%,#ffffff_75%,#fff7ef_100%)] shadow-[0_18px_40px_rgba(255,122,0,0.25)] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]">
                <div className="flex h-[40%] w-[40%] items-center justify-center rounded-[42%] bg-[radial-gradient(circle,#f7efe3_0,#f4ede4_48%,#2f241e_49%,#2f241e_58%,#d8e5d0_59%,#d8e5d0_100%)] shadow-inner" />
              </div>
            </div>
            <button
              type="button"
              className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center bg-[var(--accent)] text-[24px] text-white lg:flex"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative z-10 mx-auto mb-[-150px] grid max-w-[1030px] grid-cols-2 gap-4 border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:grid-cols-3 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[920px] lg:-translate-x-1/2 lg:translate-y-[58%] lg:grid-cols-7 lg:px-7 lg:py-6">
          {categoryItems.map((item, index) => (
            <div
              key={item.key}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="text-[48px] leading-none">{item.icon}</div>
              <p
                className={`text-[16px] ${index === 0 ? "font-semibold text-[var(--accent)]" : "text-[var(--muted)]"}`}
              >
                {t(`categories.${item.key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
