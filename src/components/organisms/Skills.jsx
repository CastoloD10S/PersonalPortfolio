import { skills } from '../data/Index.jsx';

export const Skills = () => (
    <div className= "flex flex-wrap justify-center gap-2 py-8 ">
        {skills.map (s => (
            <span key= {s} className = "rounded-full border border-retro-300 px-4 py-1.5 text-retro shadow-[3px_3px_0_#2ca243]">
                {s}
            </span>
        ))}
    </div>
)