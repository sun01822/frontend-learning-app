import Link from "next/link";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center gap-10 mt-20">
                <div className="min-w-[300px]">
                    <h1 className="text-5xl font-bold">
                        Welcome to <span className="text-green-500">Learning APP</span>
                    </h1>
                    <p className="w-1/2 mt-4  ">Here you can share your experience with others and you can earn money easily.</p>

                </div>
                <img className="rounded-xl min-w-[240px]" alt="cover image" src="https://www.thoughtco.com/thmb/dChBnpU_nYn0QE54kiA_s-H9nHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/teenage-students-in-classroom--141090063-5a653ed40c1a8200366bdd66.jpg" />
            </div>

            <div className="text-left mx-auto mt">
                <Link href="/feed">
                    <button className="mt-10 mr-4 btn-sar">Start Now</button>
                </Link>
                <Link href="/about">
                    <button className="btn_secondary">Learn more</button>
                </Link>
            </div>
        </>
    )
}

export default Hero;