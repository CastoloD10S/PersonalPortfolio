import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'
import { Footer } from './Footer'
import { personalInfo } from '../data/Index.jsx'
import { ContactForm } from './ContactForm'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

describe('Header', () => {
    it('renderiza el titulo del portafolio correctamente :)', () => {
        render(<Header />)

        expect(screen.getByRole('heading')).toBeInTheDocument()
    })
})

describe('Header', () => {
  it('muestra nombre, ocupación y foto', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(personalInfo.name)
    expect(screen.getByText(personalInfo.occupation)).toBeInTheDocument()
    expect(screen.getByAltText(personalInfo.name)).toBeInTheDocument()
  })
})

describe ('Footer', () => {
    it ('se renderiza correctamente :)', () => {
        const { container } = render (<Footer />)
        expect(container).toBeInTheDocument()
    })
}) 


describe('Footer', () => {
  it('muestra año actual y nombre', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByRole('contentinfo')).toHaveTextContent(`${year} ${personalInfo.name}`)
  })
})

describe('ContactForm', () => {
  it("debe renderizar el formulario", () => {
    render(<ContactForm />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});