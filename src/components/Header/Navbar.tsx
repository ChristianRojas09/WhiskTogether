//import * as Avatar from "@radix-ui/react-avatar";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-center items-center py-4">
            <div className="space-x-4">
                <a href="/dashboard" className="hover:text-green-700">
                    My Recipes
                </a>
                <a href="/explore" className="hover:text-green-700">
                    Explore
                </a>
                <a href="/profile" className="hover:text-green-700">
                    Profile
                </a>
                {/* <Avatar.Root>
                    <Avatar.Image />
                    <Avatar.Fallback />
                </Avatar.Root> */}
            </div>
        </nav>
    );
};

export default Navbar;
