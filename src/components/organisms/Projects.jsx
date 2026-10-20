import { projects } from '../data/Index.jsx';

export const Projects = () => (
    <div className="grid grid-cols-3 gap-1">
        {projects.map(p =>(
            <a
                key={p.id}
                href={p.url || undefined}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden bg-neutral-900"
            >
                <img src={p.img} alt={p.title} className="size-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-retro/80 p-2 text-center text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="font-semibold uppercase tracking-widest">{p.title}</span>
                    <span className="font-semibold">{p.tech.join(', ')}</span>
                </div>
            </a>

        ))}
    </div>
    
)