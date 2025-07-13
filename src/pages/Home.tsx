import { NavigationButton } from '../component/navigationButton'

export const Home: React.FC = () => {

    return (
        <>
            <NavigationButton />
            <main className="flex flex-col items-center justify-center text-center px-6 py-24">
                <button className="px-4 py-1 mb-4 text-sm font-medium border rounded-full border-black text-black hover:shadow-gray-700 transition-colors cursor-pointer shadow-sm">
                    Alpha1
                </button>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                    The Authentication Tool<br />for the client-side
                </h1>
                <p className="text-zinc-700 max-w-2xl mb-8">
                    Alpha was amazing tools for authentication. This is the new AlphaV1, a client-side authentication tool that is easy to use and integrates seamlessly with your applications.
                </p>
                <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold px-6 py-2 rounded-md cursor-pointer hover:from-purple-500 hover:to-pink-600 transition-colors">
                        Get started
                    </button>
                    <button className="bg-zinc-800 border border-zinc-600 text-white font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-zinc-700 transition-colors">
                        GitHub
                    </button>
                </div>
            </main>
        </>
    )
}