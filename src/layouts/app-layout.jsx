import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
    return (
        <div>
            <div className="grid-backround"></div>
            <main className="min-h-screen container mx-auto">
                <Header />
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">Made with 💗 by Abhishek Mishra</div>
        </div>
    )
}

export default AppLayout