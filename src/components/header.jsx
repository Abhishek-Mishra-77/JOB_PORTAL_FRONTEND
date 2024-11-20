
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import { Button } from "../components/ui/button"

const Header = () => {
    return (
        <nav className="p-4 flex justify-between items-center">
            <Link>
                <img src="../../public/logo.png" alt="logo" className="h-20" />
            </Link>
            {/* <Button variant="outline">Login</Button> */}
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}

export default Header