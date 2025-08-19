import { FiCheckCircle, FiShield, FiGlobe, FiUsers } from "react-icons/fi";

export default function WhyChooseUs() {
    return (
        <div className="w-full px-8 py-6 bg-neutral-800 rounded flex flex-col gap-5 md:flex-row md:justify-around md:items-center">

            {/* Legalitas */}
            <div className="flex items-center gap-4 md:gap-8">
                <div className="bg-yellow-500 rounded p-5 text-3xl text-white flex items-center justify-center">
                    <FiShield className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-white font-bold text-3xl leading-none">Resmi</p>
                    <p className="text-gray-400 font-bold text-base">Legalitas & BAPPEBTI</p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-700 md:w-[1px] md:h-16"></div>

            {/* Fasilitas Online Trading */}
            <div className="flex items-center gap-4 md:gap-8">
                <div className="bg-yellow-500 rounded p-5 text-3xl text-white flex items-center justify-center">
                    <FiGlobe className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-white font-bold text-3xl leading-none">Online</p>
                    <p className="text-gray-400 font-bold text-base">Trading & Monitoring</p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-700 md:w-[1px] md:h-16"></div>

            {/* Research & Profesional */}
            <div className="flex items-center gap-4 md:gap-8">
                <div className="bg-yellow-500 rounded p-5 text-3xl text-white flex items-center justify-center">
                    <FiCheckCircle className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-white font-bold text-3xl leading-none">24/7</p>
                    <p className="text-gray-400 font-bold text-base">Research & Support</p>
                </div>
            </div>
        </div>
    );
}
