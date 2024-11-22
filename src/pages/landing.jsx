import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
            <section className="text-center">
                <h1
                    className="flex flex-col items-center justify-center gradiet-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
                    Find You Dream Job
                    <span className="flex items-center gap-2 sm:gap-6">and get
                        <img
                            src="../../public/logo.png"
                            alt="hiredlogo"
                            className="h-14 sm:h-24 lg:h-32" />
                    </span>
                </h1>
                <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">Explore thousands of job listings or find the perfect condidate</p>
            </section>
            <div className="flex gap-6 justify-center">
                {/* button */}
                <Link to="/jobs">
                    <Button variant="blue" size="xl">Find Jobs</Button>
                </Link>
                <Link to="/jobs">
                    <Button variant="destructive" size="xl">Post a Job</Button>
                </Link>
                {/* carousel */}

            </div>
            {/* Banner  */}
            <section>
                {/* cards  */}
            </section>

            {/* Accordian */}
        </main>
    )
}

export default LandingPage;
