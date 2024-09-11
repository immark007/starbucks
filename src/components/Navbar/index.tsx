import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/img/logo.svg'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return(
        <header className='flex flex-row justify-between bg-white h-20 font-poppins items-center px-10 py-2 shadow-md'>
            <nav className='flex flex-row gap-7 items-center'>
                <img className='w-13' src={Logo} alt="logo" />
                <ul className='flex flex-row gap-5 uppercase font-semibold text-sm'>
                    <li className=''>
                        <a href="#">menu</a>
                    </li>
                    <li>
                        <a href="#">rewards</a>
                    </li>
                    <li>
                        <a href="#">gift cards</a>
                    </li>
                </ul>
            </nav>
            <div className='flex flex-row gap-8'>
                <div className='flex flex-row items-center gap-3'>
                    <FontAwesomeIcon className='text-xl' icon={faLocationDot} />
                    <p className='text-sm font-medium'>Find a store</p>
                </div>
                <div className='flex flex-row gap-3'>
                    <button className='bg-transparent border border-black rounded-[18px] py-2 px-2 w-20 text-xs font-medium'>Sign in</button>
                    <button className='bg-black text-white rounded-[18px] py-2 px-2 w-20 text-xs font-medium'>Join now</button>
                </div>
            </div>
        </header>
    )
}