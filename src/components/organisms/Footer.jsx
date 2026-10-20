import { personalInfo } from '../data/Index.jsx'

export const Footer = () => (
    <footer className= "mt-12 border-t border-neutral-800 py-8 text-center text-xs text-neutral-400">
        <div className="mb-3 flex justify-center gap-4 text-neutral-500">
            {personalInfo.socialLinks.map(s => (
                <a key={s.id} href={s.url} aria-label={s.name}>{s.icon}</a>
            ))}
        </div>
        © {new Date().getFullYear()} {personalInfo.name}
    </footer>
)