import { PreparedPath } from "./PreparedPath";
import { UrgentPath } from "./UrgentPath";

export function TwoPathSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          <div className="md:pr-8">
            <UrgentPath />
          </div>
          <div className="border-border md:border-l md:pl-8">
            <PreparedPath />
          </div>
        </div>
      </div>
    </section>
  );
}
