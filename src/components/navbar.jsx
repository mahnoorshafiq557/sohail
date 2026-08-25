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
    `transition-colors py-1 ${isActive ? 'text-[#fca311] border-b-2 border-[#fca311] font-semibold' : 'text-[#14213d] hover:text-[#fca311]'}`

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs w-full">
            <div className='px-4 sm:px-6 md:px-8 py-3 mx-auto max-w-[1450px] w-full flex justify-between items-center relative'>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                    <img
                        src="/sohail.png"
                        alt="M. Sohail"
                        className="h-[48px] w-[48px] sm:h-[55px] sm:w-[55px] shrink-0 rounded-full border-2 border-[#14213d]/10 object-cover"
                    />
                </NavLink>

                {/* Desktop nav */}
                <div className='hidden md:flex justify-between items-center gap-6 font-medium text-sm text-[#14213d]'>
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to} className={navLinkClass}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <div className='hidden md:block'>
                    <NavLink to="/contact">
                        <Button Color="#14213d" text='Get Started!' textColor='#ffffff' />
                    </NavLink>
                </div>

                {/* Mobile menu toggle */}
                <button
                    type='button'
                    className='md:hidden text-[#14213d] p-2 focus:outline-none rounded border border-gray-200 hover:bg-gray-50'
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
                </button>

                {/* Mobile nav panel */}
                {isMenuOpen && (
                    <div className='md:hidden absolute top-full left-0 right-0 z-50 flex flex-col gap-4 bg-white px-6 py-6 shadow-xl border-b border-gray-200 font-medium text-[#14213d]'>
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
                        <div className="pt-2 border-t border-gray-100">
                            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                                <Button Color="#14213d" text='Get Started!' textColor='#ffffff' className="w-full" />
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
