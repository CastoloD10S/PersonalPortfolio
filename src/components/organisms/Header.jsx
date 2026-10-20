import { personalInfo } from '../data/Index.jsx';

export const Header = () => {
  const { name, occupation, overview, photoSrc, socialLinks, location, education } = personalInfo

  return (
    <header className="flex flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:items-start sm:gap-16">
      {/* Avatar */}
      <div className="rounded-full bg-gradient-to-tr from-[#1b6b2b] via-retro to-[#5cd675] p-[3px]">
        <img
          src={photoSrc}
          alt={name}
          className="size-32 rounded-full border-4 border-black object-cover sm:size-40"
        />
      </div>

      <div className="flex flex-col gap-4 text-center sm:text-left">
        <div className="flex items-center justify-center gap-4 sm:justify-start">
          <h1 className="text-xl font-light uppercase tracking-widest">{name}</h1>
          
        </div>

        <div className="flex justify-center gap-8 text-sm sm:justify-start">
          <span><b>4</b> proyectos</span>
          <span><b>3</b> años exp.</span>
          <span><b>5</b> skills</span>
        </div>

        <div className="text-sm">
          <p className="font-semibold">{occupation}</p>
          <p className="font-semibold">{education}</p>
          <p className="max-w-md text-neutral-300">{overview}</p>
          <p className="text-neutral-500">{location}</p>
        </div>

        <div className="flex justify-center gap-4 text-neutral-300 sm:justify-start">
          {socialLinks.map(s => (
            <a key={s.id} href={s.url} aria-label={s.name}>{s.icon}</a>
          ))}
        </div>
      </div>
    </header>
  )
}