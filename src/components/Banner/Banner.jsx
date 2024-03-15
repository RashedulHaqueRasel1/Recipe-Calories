import './Banner.css'
export default function Banner() {
    return (
        <div>


            <div className="hero  mt-14 rounded-lg bg-img"  >
                <div className="hero-content text-center text-neutral-content">
                    <div className="mx-auto text-center ">
                        <h1 className="mb-7 text-2xl lg:text-5xl    lg:w-3/4 text-[#FFFFFF]  lg:ml-32  font-extrabold"> Discover an exceptional cooking
                            class tailored for you!</h1>
                        <p className=" lg:ml-52 text-xl text-center lg:w-[650px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding
                            problems to become an exceptionally well world-class Programmer.</p>
                        <a href="#"><button
                            className="btn bg-[#0BE58A] px-[20px] text-[#150B2B] rounded-3xl  font-semibold  mr-6 hover:bg-transparent hover:border-[#FF4240] hover:text-white mt-10  ">Explore Now</button></a>
                        <a href="#"><button
                            className="btn bg-transparent btn-outline px-[20px] text-[#FFF] rounded-3xl  font-semibold  mr-6 hover:bg-[#0BE58A] hover:border-[#FF4240] hover:text-white mt-10  ">Our Feedback</button></a>
 
                    </div>
                </div>
            </div>


        </div>
    )
}
