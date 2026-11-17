import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { reviews } from "@/lib/data/reviews";

export function ReviewsSlider() {
  if (reviews.length === 0) return null;

  return (
    <Section tone="mist">
      <SectionHeader
        kicker="Customer feedback"
        title="Experiences from our customers."
        lead="Feedback shared by people and businesses who have shipped with MEGTRACK."
      />
      <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {reviews.map((review) => (
          <figure
            key={`${review.name}-${review.company ?? ""}`}
            className="m-0 rounded-[20px] border border-[var(--line)] bg-white p-6"
          >
            {review.rating && (
              <div
                className="mb-4 flex gap-1 text-[var(--red)]"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" />
                ))}
              </div>
            )}
            <blockquote className="m-0 text-[1.05rem] leading-relaxed">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-[var(--line)] pt-4">
              <b className="block">{review.name}</b>
              {review.company && (
                <span className="text-[0.9rem] text-[var(--muted)]">{review.company}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}