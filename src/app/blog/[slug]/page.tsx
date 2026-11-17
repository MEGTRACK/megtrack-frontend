import { ComingSoonPage } from "@/components/ui/ComingSoonPage";
import { posts } from "@/lib/data/posts";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default function BlogPostPage() {
  return (
    <ComingSoonPage
      title="Shipping article"
      description="This article is being prepared. Contact our team if you need help with a shipment."
    />
  );
}