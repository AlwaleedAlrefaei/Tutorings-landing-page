import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Doodle, Partners } from './components/Partners';
import { Programs } from './components/Programs';
import { HowItWorks } from './components/HowItWorks';
import { Cefr } from './components/Cefr';
import { Features } from './components/Features';
import { Teachers } from './components/Teachers';
import { Idp } from './components/Idp';
import { Comparison } from './components/Comparison';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Library } from './components/Library';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        تخطَّ إلى المحتوى الرئيسي
      </a>

      <Header />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Doodle />
        <Partners />
        <Programs />
        <HowItWorks />
        <Cefr />
        <Features />
        <Teachers />
        <Idp />
        <Comparison />
        <Stats />
        <Testimonials />
        <Library />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
