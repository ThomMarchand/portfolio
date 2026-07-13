import { yearsSince } from "@/app/utils/yearsSince";
import { TIME_LINE_ITEMS as timelineItems } from "@/app/lib/constants";

export default function SectionAbout() {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6">
      <div data-reveal className="mb-12 pt-24">
        <p className="font-label text-xs text-quiet-violet uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-quiet-violet" />À propos
        </p>
        <h2
          className="font-display font-bold text-blue-fusion tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          Un parcours atypique,
          <br />
          une force réelle.
        </h2>
      </div>

      <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
        <div>
          <p className="font-body text-hematite text-sm leading-relaxed mb-4">
            Carrossier, conseiller pneumatiques, développeur. Le fil conducteur
            ? Fabriquer des outils qui simplifient la vie des gens et résoudre
            les problèmes avant qu&apos;ils ne bloquent quelqu&apos;un.{" "}
            {yearsSince(2004)} ans de terrain et le dev comme aboutissement
            logique de tout ça.
          </p>
          <p className="font-body text-hematite text-sm leading-relaxed mb-6">
            Mon cursus chez les{" "}
            <strong className="text-blue-fusion font-medium">
              Compagnons du Devoir
            </strong>{" "}
            m&apos;a appris ce que signifie vraiment maîtriser un métier. Cette
            exigence, je la transfère dans le code : pas de dette technique
            cachée, pas de bug qu&apos;on &quot;laisse pour plus tard&quot;.
          </p>
          <blockquote className="border-l-2 border-golden-mist pl-5 bg-golden-mist/15 py-3 pr-4 rounded-r-xl font-body text-sm text-hematite italic">
            {`Ma vie professionnelle ne commence pas en septembre 2022, elle
            est riche de ${yearsSince(2004)} années d'expériences qui font
            de moi un développeur qui comprend les enjeux métier.`}
          </blockquote>
        </div>

        <div className="flex flex-col gap-3">
          {timelineItems.map((item) => (
            <div
              key={item.year}
              className="flex gap-4 p-4 bg-white rounded-2xl border border-hematite/10"
            >
              <span
                className={`w-2 h-2 rounded-full ${item.accent} flex-shrink-0 mt-2`}
              />
              <div>
                <p className="font-label text-xs text-cloud-cover uppercase tracking-wider mb-1">
                  {item.year}
                </p>
                <p className="font-display font-semibold text-sm text-blue-fusion">
                  {item.title}
                </p>
                <p className="font-body text-xs text-hematite">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
