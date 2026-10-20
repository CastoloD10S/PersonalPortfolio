import { useState } from 'react'
import { tabs } from '../data/Index.jsx';
import { Projects } from './Projects.jsx';
import { Experience } from './Experience.jsx';
import { Skills } from './Skills.jsx';
import { ContactForm } from './ContactForm.jsx';


export const Content = () => {
  const [active, setActive] = useState(1)

  return (
    <section>
      {/* Tabs */}
      <nav className="flex justify-center gap-12 border-t border-neutral-800">
        {tabs.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`-mt-px flex items-center gap-2 border-t py-4 text-xs font-semibold uppercase tracking-widest transition-colors ${
              active === id
                ? 'border-retro text-retro '
                : 'border-transparent text-neutral-500 hover:text-neutral-300 '
            }`}
          >
            <Icon size={14} />
            <span className="hidden sm:inline">{name}</span>
          </button>
        ))}
      </nav>

      <div className="pt-1">
        {active === 1 && <Projects />}
        {active === 2 && <Experience />}
        {active === 3 && <Skills />}
        {active === 4 && <ContactForm />}
      </div>

      
    </section>
  )
}