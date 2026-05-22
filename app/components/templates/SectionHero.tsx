import { PERSONAL as personal } from "@/app/lib/theme";
import { METRICS as metrics, SOCIAL as social } from "@/app/lib/constants";

import { yearsSince } from "@/app/utils/yearsSince";

import SocialLink from "../atoms/SocialLink";

export default function SectionHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 max-w-[1100px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <h1
            className="font-display font-bold text-blue-fusion tracking-tight leading-[0.95] mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            Thomas
            <br />
            Marchand
            <span className="text-baltic-sea">.</span>
          </h1>

          <div className="w-14 h-1 bg-golden-mist rounded-full mb-6" />

          <p className="font-body text-hematite text-lg leading-relaxed mb-2">
            Développeur Full-Stack & DevOps
          </p>
          <p className="font-body text-hematite text-sm leading-relaxed mb-8">
            Spécialisé{" "}
            <strong className="text-blue-fusion font-medium">
              Node.js · TypeScript · AdonisJS
            </strong>
            .<br />
            {yearsSince(2004)} ans d&apos;expérience terrain, {yearsSince(2023)}
            + ans de développement professionnel.
            <br />
            Compagnons du Devoir, la rigueur du métier appliquée au code.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-fusion text-cloud-dancer rounded-xl font-label font-semibold text-sm hover:bg-blue-fusion/90 transition-colors"
            >
              Me contacter →
            </a>
            <SocialLink
              href={social.github.href}
              label={social.github.label}
              className="inline-flex items-center gap-2 px-5 py-3 border border-hematite/30 rounded-xl text-hematite font-label text-sm hover:border-blue-fusion/40 hover:text-blue-fusion transition-colors"
            />
            <SocialLink
              href={social.linkedin.href}
              label={social.linkedin.label}
              className="inline-flex items-center gap-2 px-5 py-3 border border-hematite/30 rounded-xl text-hematite font-label text-sm hover:border-blue-fusion/40 hover:text-blue-fusion transition-colors"
            />
          </div>
        </div>

        {/* Right — info card (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {/* Avatar */}
          <div className="rounded-3xl overflow-hidden flex items-center justify-center">
            <img
              src="/images/avatar.png"
              alt={personal.name}
              className="object-cover"
            />
          </div>

          {/* metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`rounded-2xl p-4 ${
                  i === 0
                    ? "bg-golden-mist"
                    : i === 1
                      ? "bg-veiled-vista"
                      : i === 2
                        ? "bg-baltic-sea"
                        : "bg-quiet-violet"
                }`}
              >
                <div className="font-display font-bold text-2xl text-blue-fusion">
                  {m.value}
                </div>
                <div className="font-label text-xs text-blue-fusion/60 uppercase tracking-wider mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-hematite/10">
            <span className="text-lg">🏆</span>
            <div>
              <p className="font-label font-semibold text-blue-fusion text-xs">
                Compagnons du Devoir
              </p>
              <p className="font-body text-hematite text-xs">
                Excellence & rigueur métier
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile avatar */}
      <div className="lg:hidden mt-8 rounded-3xl overflow-hidden flex items-center justify-center">
        <img src="/images/avatar.png" alt={personal.name} className="h-64 " />
      </div>

      {/* Mobile metrics */}
      <div className="lg:hidden mt-6 grid grid-cols-4 gap-3">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`rounded-2xl p-4 ${
              i === 0
                ? "bg-golden-mist"
                : i === 1
                  ? "bg-veiled-vista"
                  : i === 2
                    ? "bg-baltic-sea"
                    : "bg-quiet-violet"
            }`}
          >
            <div className="font-display font-bold text-xl text-blue-fusion">
              {m.value}
            </div>
            <div className="font-label text-xs text-blue-fusion/60 uppercase tracking-wider mt-1">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
