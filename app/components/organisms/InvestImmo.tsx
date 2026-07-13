import { INVESTIMMO_STACK as investImmoStack } from "@/app/lib/constants";

import StackTag from "@/app/components/atoms/StackTag";

export default function InvestImmo() {
  return (
    <div className="bg-baltic-sea rounded-3xl p-8 border border-black/5">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg mb-5">
        🏠
      </div>
      <h3 className="font-display font-bold text-cloud-dancer text-xl mb-3">
        InvestImmo
      </h3>
      <p className="font-body text-cloud-dancer/70 text-sm leading-relaxed mb-5">
        Plateforme de gestion de biens immobiliers en location de la déclaration
        des biens au suivi locatif, avec une chaîne de tests et de déploiement
        complète.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {investImmoStack.map((t) => (
          <StackTag key={t} label={t} dark />
        ))}
      </div>
    </div>
  );
}
