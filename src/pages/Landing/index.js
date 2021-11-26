import Hero from 'components/Hero';
import Partners from 'components/Partners';
import Features from 'containers/Features';
import AssetClasses from 'components/AssetClasses';
import Cta from 'components/Cta';
import Regulation from 'components/Regulation';
import Testimonies from 'components/Testimonies';
import Community from 'components/Community';
import AppBanner from 'components/AppBanner';
import Footer from 'components/Footer';
export default function Landing() {
  return (
    <div>
      <Hero />
      <Partners />
      <Features />
      <AssetClasses />
      <Cta/>
      <Regulation />
      <Testimonies />
      <Community />
      <AppBanner />
      <Footer />
    </div>
  );
}
