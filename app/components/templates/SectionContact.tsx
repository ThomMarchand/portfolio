import Title from "@/app/components/atoms/Title";
import ContactForm from "@/app/components/molecules/ContactForm";

export default function SectionContact() {
  return (
    <section className="mb-30">
      <Title id="contact" renderAs="h2">
        Contact
      </Title>

      <ContactForm />
    </section>
  );
}
