import RewardsImg from '../../assets/img/rewards.png';
import Button from '../Button';

export default function Rewards() {
    return (
        <section className="flex flex-col lg:flex-row justify-center items-center mt-8 bg-[#D4E9E2]">
            {/* Imagem */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img className="w-full object-cover h-auto" src={RewardsImg} alt="rewards" />
            </div>
            {/* Conteúdo */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-7 p-8 lg:flex-col">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-medium text-[#1E3932] lg:max-w-lg xl:max-w-xl lg:leading-tight xl:leading-tight">
                    Spring in your step, Rewards in your cup
                </h2>
                <span className="text-1xl lg:text-2xl xl:max-w-lg lg:leading-tight">
                    Shake up your usual and start earning Rewards — join today!*
                </span>
                <Button color="transparent">Join now</Button>
            </div>
        </section>
    );
}
