import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/img/logo.svg'
import { faLocationDot, faBars } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
            <header className='flex flex-row justify-between bg-white h-20 w-full font-poppins items-center px-10 py-2 shadow-md sticky top-0 z-50'>
                <nav className='flex flex-row justify-between items-center w-full'>
                    
                    <div className='flex flex-row gap-7 items-center'>
                        <img className='w-13 cursor-pointer' src={Logo} alt="logo" />
                        <ul className='gap-5 uppercase font-semibold text-sm hidden md:flex flex-row'>
                            <li>
                                <a className='hover:text-green-800' href="#">menu</a>
                            </li>
                            <li>
                                <a className='hover:text-green-800' href="#">rewards</a>
                            </li>
                            <li>
                                <a className='hover:text-green-800' href="#">gift cards</a>
                            </li>
                        </ul>
                    </div>

                    <div className='hidden md:flex flex-row gap-8'>
                        <div className='flex flex-row items-center gap-3'>
                            <FontAwesomeIcon className='text-xl' icon={faLocationDot} />
                            <p className='text-sm font-medium'>Find a store</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <Button color='transparent'>Sign in</Button>
                            <Button color='black'>Join now</Button>
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </nav>

                <div className={`absolute top-20 left-0 w-6/12 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-left gap-3 p-5 md:hidden`}>
                    <a href="#" className='block text-xl'>menu</a>
                    <a href="#" className='block text-xl'>rewards</a>
                    <a href="#" className='block text-xl'>gift cards</a>

                    <div className='flex flex-col gap-3 border-t border-gray-300 pt-3'>
                        <Button color='transparent'>Sign in</Button>
                        <Button color='black'>Join now</Button>
                    </div>
                </div>
            </header>
    )
}
