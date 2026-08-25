import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu'
import Button from './button'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/sitelist', label: 'Site List' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
]

const navLinkClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-[#fca311] border-b-2 border-[#fca311]' : 'hover:text-[#fca311]'}`

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='px-4 md:px-8 py-3 bg-[#ffffff]/10 flex justify-between md:justify-around items-center relative'>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                    src="/sohail.png"
                    alt="M. Sohail"
                    className="h-[55px] w-[55px] shrink-0 rounded-full border-2 border-[#ffffff] object-cover"
                />
            </NavLink>

            {/* Desktop nav */}
            <div className='hidden md:flex justify-between gap-6 font-semibold py-3 text-[#14213d]'>
                {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={navLinkClass}>
                        {link.label}
                    </NavLink>
                ))}
            </div>

            <div className='hidden md:block'>
                <Button Color="#14213d" text='Get Started!' textColor='#ffffff' />
            </div>

            {/* Mobile menu toggle */}
            <button
                type='button'
                className='md:hidden text-[#14213d] p-2'
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>

            {/* Mobile nav panel */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-full left-0 right-0 z-50 flex flex-col gap-4 bg-white px-6 py-6 shadow-lg font-semibold text-[#14213d]'>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={navLinkClass}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Button Color="#14213d" text='Get Started!' textColor='#ffffff' />
                </div>
            )}
        </div>
    )
}

export default Navbar
