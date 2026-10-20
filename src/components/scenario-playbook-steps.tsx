import { PhoneShot } from "./phone-shot";
import type { scenarioPlaybooks } from "../content/marketing";

type Playbook = (typeof scenarioPlaybooks)[number];

type ScenarioPlaybookStepsProps = {
  playbook: Playbook;
  /** Defaults to playbook.title */
  title?: string;
  /** Defaults to playbook.lead */
  lead?: string;
  eyebrow?: string;
};

export function ScenarioPlaybookSteps({
  playbook,
  title = playbook.title,
  lead = playbook.lead,
  eyebrow = "시나리오",
}: ScenarioPlaybookStepsProps) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-green uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
        {lead}
      </p>

      <ol className="mt-8 space-y-8">
        {playbook.steps.map((step, index) => (
          <li
            key={step.label}
            className="grid items-center gap-6 rounded-2xl border border-line bg-surface px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1fr_0.72fr]"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-green uppercase">
                {step.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-soft text-xs text-green">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {step.body}
              </p>
            </div>
            <div className="mx-auto w-[min(100%,220px)]">
              <PhoneShot src={step.src} alt={step.alt} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
