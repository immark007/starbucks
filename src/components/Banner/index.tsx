import Banne from '../../assets/img/banner.jpg';
export default function Banner() {
    return (
        <main className="flex flex-col justify-between items-center mt-7 bg-[#A0C292] w-full lg:flex-row">
            <div className="w-full flex flex-col order-2 justify-center p-8 items-center gap-4 text-center lg:order-1 lg:w-1/2 lg:gap-8">
                <div className="flex flex-col gap-6 text-center w-full lg:w-4/5 xl:w-3/4">
                    <h1 className="text-3xl font-medium text-[#1E3932] lg:text-4xl xl:text-6xl">Cups of appreciation</h1>
                    <span className="text-base text-[#1E3932] lg:text-lg xl:text-xl">This Administrative Professionals’ Day, express your thanks with a well-deserved Starbucks Card.</span>
                </div>
                <div>
                    <button className="bg-transparent border border-black rounded-[18px] py-2 px-4 text-xs font-medium text-[#1E3932] lg:text-sm xl:text-base">Send an eGift</button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                <img src={Banne} alt="" className="object-cover w-full h-auto" />
            </div>
        </main>
    );
}
