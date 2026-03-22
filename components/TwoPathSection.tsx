import { PreparedPath } from "./PreparedPath";
import { ReadinessPath } from "./ReadinessPath";
import { UrgentPath } from "./UrgentPath";

export function ThreePathSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <UrgentPath />
          </div>
          <div className="border-border md:border-l md:pl-8">
            <ReadinessPath />
          </div>
          <div className="border-border md:border-l md:pl-8">
            <PreparedPath />
          </div>
        </div>
      </div>
    </section>
  );
}
