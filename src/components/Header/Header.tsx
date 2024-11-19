import Navbar from "./Navbar";

const Header: React.FC = () => {
    return (
        <header className="bg-tan text-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left-aligned logo or title */}
                    <div className="text-2xl font-bold">
                        <a href="/">Whisk Together</a>
                    </div>
                    {/* Centered navigation */}
                    <Navbar />
                </div>
            </div>
        </header>
    )
    
}

export default Header;