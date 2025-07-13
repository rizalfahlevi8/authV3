import { useNavigate } from "react-router-dom";

export const NavigationButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='flex justify-between items-center justify p-4 text-gray-700 font-semibold bg-white'>
                <div>
                    <img src="./assets/AlphaV1.png" alt="AlphaV1" className="w-35 h-15" />
                </div>
                <div className="rounded-xl p-2 space-x-8 flex text-sm font-semibold">
                    <button className='cursor-pointer hover:text-yellow-500 text-gray-700' onClick={() => navigate('/guide')}>Guide</button><span className="text-gray-500">|</span>
                    <button className='cursor-pointer hover:text-yellow-500 text-gray-700' onClick={() => navigate('/config')}>Config</button><span className="text-gray-500">|</span>
                    <button className='cursor-pointer hover:text-yellow-500 text-gray-700' onClick={() => navigate('/about')}>Plugins</button><span className="text-gray-500">|</span>
                    <button className='cursor-pointer hover:text-yellow-500 text-gray-700' onClick={() => navigate('/about')}>Documentation</button>
                </div>
                <div>
                    <span>Version 1.0</span>
                </div>
            </div>
        </>
    );
}