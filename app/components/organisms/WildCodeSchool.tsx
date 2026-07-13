import { WCS_STACK as wcsStack } from "@/app/lib/constants";

import StackTag from "@/app/components/atoms/StackTag";

export default function WildCodeSchool() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-hematite/10">
      <div className="w-10 h-10 rounded-xl bg-veiled-vista flex items-center justify-center text-lg mb-5">
        🚀
      </div>
      <h3 className="font-display font-bold text-blue-fusion text-xl mb-3">
        Wild Code Online
      </h3>
      <p className="font-body text-hematite text-sm leading-relaxed mb-5">
        Plateforme de code en ligne : développer, tester et partager du code
        facilement. Projet de fin d&apos;alternance avec CI, tests unitaires,
        intégration et architecture MVC.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {wcsStack.map((t) => (
          <StackTag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}
