import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}

export default function Button({
    children, 
    color = "transparent",
} : {
    children: React.ReactNode; 
    color?: 'black' |'transparent';
}){
    const defaultButtonClasses = "border border-black rounded-[18px] py-2 px-2 w-20 text-xs font-medium";

    const colors = {
        black: 'bg-black text-white',
        transparent: 'bg-transparent border border-black'
    }

    return <button className={cn(defaultButtonClasses, colors[color])}>
        {children}
    </button>
}