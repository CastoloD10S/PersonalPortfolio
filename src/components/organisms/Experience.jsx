import { experience } from '../data/Index.jsx'

export const Experience = () => (
  <ul className="divide-y divide-neutral-800">
    {experience.map(e => (
      <li key={e.id} className="py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold">{e.role} · {e.company}</h3>
          <span className="text-sm text-neutral-400">{e.period}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{e.description}</p>
      </li>
    ))}
  </ul>
)