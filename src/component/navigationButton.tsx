import { useNavigate } from "react-router-dom";

export const NavigationButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='flex justify-between items-center justify p-4'>
                <div className="text-gray-700 font-semibold">
                    <img src="./assets/AlphaV1.png" alt="AlphaV1" className="w-35 h-20" />
                </div>
                <div className="border border-gray-300 rounded-full p-2 shadow-md gap-4 flex text-sm font-semibold ">
                    <button className='cursor-pointer hover:text-yellow-500 text-gray-700' onClick={() => navigate('/')}>Home</button>
                    <button className='cursor-pointer hover:text-yellow-500 text-gray-700' onClick={() => navigate('/about')}>About</button>
                </div>
                <div className="text-gray-700 font-semibold">
                    <span>Version 1.0</span>
                </div>
            </div>
        </>
    );
}