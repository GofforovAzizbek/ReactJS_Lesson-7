import { AppDownloadSection } from '../components/home/AppDownloadSection';
import { BestSellingSection } from '../components/home/BestSellingSection';
import { DealsSection } from '../components/home/DealsSection';
import { DeliverySection } from '../components/home/DeliverySection';
import { HeroSection } from '../components/home/HeroSection';
import { NewProductsSection } from '../components/home/NewProductsSection';
import { SpecialServiceSection } from '../components/home/SpecialServiceSection';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { TopBar } from '../components/layout/TopBar';

export function HomePage({ theme, toggleTheme }) {
  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--text-main)] transition-colors duration-300">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <main>
        <HeroSection />
        <NewProductsSection />
        <SpecialServiceSection />
        <BestSellingSection />
        <DeliverySection />
        <DealsSection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}
