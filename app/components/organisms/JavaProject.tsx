import { JAVA_STACK as javaStack } from "@/app/lib/constants";

import StackTag from "@/app/components/atoms/StackTag";

export default function JavaProject() {
  return (
    <div className="bg-golden-mist rounded-3xl p-8 border border-black/5">
      <div className="w-10 h-10 rounded-xl bg-blue-fusion flex items-center justify-center text-lg mb-5">
        ☕
      </div>
      <h3 className="font-display font-bold text-blue-fusion text-xl mb-3">
        CRUD User — Java
      </h3>
      <p className="font-body text-blue-fusion/70 text-sm leading-relaxed mb-5">
        Projet personnel d&apos;apprentissage Java : architecture MVC, serveur
        HTTP natif, JDBC / SQLite, Maven. Construction from scratch pour
        maîtriser les fondamentaux du langage.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {javaStack.map((t) => (
          <StackTag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}
