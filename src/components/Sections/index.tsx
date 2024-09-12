import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Button from '../Button';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function SectionWithImage({
    title,
    text,
    buttonLabel,
    imageUrl,
    reverseOrder = false,
    backgroundColor = '#A0C292',
    titleColor = '#1E3932', // cor padrão para o título
    textColor = '#1E3932'   // cor padrão para o texto
}: {
    title: string;
    text: string;
    buttonLabel: string;
    imageUrl: string;
    reverseOrder?: boolean;
    backgroundColor?: string;
    titleColor?: string; // novo prop para cor do título
    textColor?: string;  // novo prop para cor do texto
}) {
    const defaultSectionClasses = "flex flex-col justify-between items-center mt-8 w-full lg:flex-row lg:justify-center";
    const contentClasses = "w-full flex flex-col justify-center p-8 items-center gap-4 text-center lg:w-1/2 lg:gap-8";
    const imageContainerClasses = "w-full lg:w-1/2 flex justify-center";

    return (
        <section 
            className={cn(defaultSectionClasses, reverseOrder && 'lg:flex-row-reverse')}
            style={{ backgroundColor }}
        >
            <div className={cn(imageContainerClasses, 'order-1 lg:order-2')}>
                <img src={imageUrl} alt={title} className="object-cover w-full h-auto" />
            </div>
            <div className={cn(contentClasses, 'order-2 lg:order-1')}>
                <div className="flex flex-col gap-3 text-center items-center w-full lg:w-3/4 xl:w-2/3 lg:gap-8">
                    <h1 
                        style={{ color: titleColor }} 
                        className="text-2xl font-medium lg:text-5xl xl:text-6xl lg:max-w-lg xl:max-w-xl lg:leading-tight xl:leading-tight"
                    >
                        {title}
                    </h1>
                    <span 
                        style={{ color: textColor }} 
                        className="text-base md:text-lg md:max-w-md md:leading-tight lg:text-2xl"
                    >
                        {text}
                    </span>
                </div>
                <div>
                    <Button color="transparent">
                        {buttonLabel}
                    </Button>
                </div>
            </div>
        </section>
    );
};
