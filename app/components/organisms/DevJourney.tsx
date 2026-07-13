import { DEVJOURNEY_STACK as devJourneyStack } from "@/app/lib/constants";

import StackTag from "@/app/components/atoms/StackTag";

export default function DevJourney() {
  return (
    <div className="bg-quiet-violet rounded-3xl p-8 border border-black/5">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg mb-5">
        ✍️
      </div>
      <h3 className="font-display font-bold text-cloud-dancer text-xl mb-3">
        DevJourney
      </h3>
      <p className="font-body text-cloud-dancer/70 text-sm leading-relaxed mb-5">
        Blog personnel sur mon quotidien de développeur et ma reconversion.
        C&apos;est aussi un terrain d&apos;apprentissage de WordPress, de son
        écosystème et de son déploiement.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {devJourneyStack.map((t) => (
          <StackTag key={t} label={t} dark />
        ))}
      </div>
    </div>
  );
}
