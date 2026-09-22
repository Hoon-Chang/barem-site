import { securityPoints } from "../../content/marketing";

export function SecurityContent() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {securityPoints.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className="rounded-2xl border border-line bg-green-soft/40 p-5"
        >
          <Icon className="text-green" size={22} aria-hidden />
          <h2 className="mt-3 font-semibold text-ink">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
        </li>
      ))}
    </ul>
  );
}
