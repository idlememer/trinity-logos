import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeInfo } from "@/components/contact/OfficeInfo";

export const metadata: Metadata = {
  title: "Contact — Talk to our enterprise team",
  description:
    "Reach the Logos Trinity Technologies team in Visakhapatnam. Recruitment, consulting, software engineering — get a tailored proposal in 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={
          <>
            Let's design something{" "}
            <span className="text-gradient-blue">remarkable.</span>
          </>
        }
        description="Talent strategy, technology delivery, or just exploring partnership — our enterprise team responds within 4 business hours."
      />
      <section className="pb-24">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <OfficeInfo />
          </div>
        </div>
      </section>
    </>
  );
}
