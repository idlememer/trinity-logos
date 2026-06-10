import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CareerBoard } from "@/components/careers/CareerBoard";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export const metadata: Metadata = {
  title: "Careers — Open Roles & Opportunities",
  description:
    "Browse curated job openings across India and remote — from senior engineering to product, data, design, and recruitment. Direct recruiter access.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Open opportunities"
        title={
          <>
            Find your next role —{" "}
            <span className="text-gradient-blue">without the noise.</span>
          </>
        }
        description="A hand-curated job board across India's leading enterprises and our own teams. Real recruiters, real feedback, real timelines."
      />
      <CareerBoard />
      <ContactTeaser />
    </>
  );
}
