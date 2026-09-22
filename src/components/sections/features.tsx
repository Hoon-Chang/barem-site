import { highlights } from "../../content/marketing";

export function FeaturesContent() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className="space-y-3 rounded-2xl border border-line/80 p-5"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-soft text-green">
            <Icon size={20} aria-hidden />
          </span>
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          <p className="text-sm leading-relaxed text-muted">{body}</p>
        </li>
      ))}
    </ul>
  );
}
