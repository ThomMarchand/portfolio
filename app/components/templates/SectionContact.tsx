import { SOCIAL } from "@/app/lib/constants";

import SocialLink from "@/app/components/atoms/SocialLink";

import ContactForm from "@/app/components/molecules/ContactForm";

export default function SectionContact() {
  return (
    <section id="contact" className="max-w-[1100px] mx-auto px-6">
      <div data-reveal className="pt-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Left — dark panel */}
          <div className="bg-blue-fusion rounded-3xl p-10 flex flex-col justify-between">
            <div>
              <p className="font-label text-xs text-quiet-violet uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="inline-block w-5 h-px bg-quiet-violet" />
                Contact
              </p>
              <h2
                className="font-display font-bold text-cloud-dancer tracking-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
              >
                Travaillons
                <br />
                ensemble.
              </h2>
              <p className="font-body text-cloud-dancer/60 text-sm leading-relaxed">
                Ouvert aux opportunités sur Nantes / Angers / Ancenis.
                <br />
                N&apos;hésitez pas à me contacter pour discuter de votre projet.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-10">
              <SocialLink
                href={SOCIAL.linkedin.href}
                label="LinkedIn"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl font-label text-sm font-medium text-cloud-dancer hover:bg-white/20 transition-colors w-fit"
              />
              <SocialLink
                href={SOCIAL.github.href}
                label="GitHub"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl font-label text-sm font-medium text-cloud-dancer hover:bg-white/20 transition-colors w-fit"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl p-8 border border-hematite/10">
            <h3 className="font-display font-semibold text-blue-fusion text-lg mb-6">
              Envoyer un message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
