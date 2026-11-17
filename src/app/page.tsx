import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesBento } from "@/components/home/ServicesBento";
import { WhyUs } from "@/components/home/WhyUs";
import { OriginNetwork } from "@/components/home/OriginNetwork";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ReviewsSlider } from "@/components/home/ReviewsSlider";
import { BlogPreview } from "@/components/home/BlogPreview";
import { QuoteBand } from "@/components/home/QuoteBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesBento />
      <OriginNetwork />
      <WhyUs />
      <WhoWeServe />
      <ProcessSection />
      <ReviewsSlider />
      <BlogPreview />
      <QuoteBand />
    </>
  );
}