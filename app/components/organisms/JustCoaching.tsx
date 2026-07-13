import {
  ARCH_BLOCKS as archBlocks,
  JC_STACK as jcStack,
} from "@/app/lib/constants";

import StackTag from "@/app/components/atoms/StackTag";

export default function JustCoaching() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 bg-blue-fusion rounded-3xl overflow-hidden border border-black/10">
      <div className="p-8 h-full flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg mb-5">
            ⚡
          </div>
          <h3 className="font-display font-bold text-cloud-dancer text-xl mb-3">
            Just Coaching — API & Écosystème
          </h3>
          <p className="font-body text-cloud-dancer/70 text-sm leading-relaxed mb-5">
            Architecture REST connectant CRM, app coach, app client et
            visioconférence. Développement de nouvelles routes, optimisation de
            performances et synchronisation avec des services tiers (Brevo,
            Stripe, Axonaut).
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <div className="pt-3 border-t border-white/10 flex items-baseline gap-2">
            <span className="font-display font-bold text-2xl text-golden-mist">
              −37s
            </span>
            <span className="font-label text-sm text-cloud-dancer/60">
              de temps de réponse sur la route commandes
            </span>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-baseline gap-2">
            <span className="font-display font-bold text-2xl text-golden-mist">
              Grafana
            </span>
            <span className="font-label text-sm text-cloud-dancer/60">
              monitoring ajouté sur le serveur API
            </span>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-baseline gap-2">
            <span className="font-display font-bold text-2xl text-golden-mist">
              5
            </span>
            <span className="font-label text-sm text-cloud-dancer/60">
              applications interconnectées
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {jcStack.map((t) => (
            <StackTag key={t} label={t} dark />
          ))}
        </div>
      </div>

      {/* Arch blocks column — slightly darker */}
      <div className="bg-black/20 p-6 flex flex-col gap-2.5 justify-center">
        {archBlocks.map((b) => (
          <div
            key={b.label}
            className="bg-white/8 rounded-xl p-4 border border-white/10"
          >
            <p className="font-label text-xs text-cloud-dancer/50 uppercase tracking-wider mb-1">
              {b.label}
            </p>
            <p className="font-display font-semibold text-sm text-baltic-sea">
              {b.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
