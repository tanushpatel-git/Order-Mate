import React, {useEffect} from 'react'
import CardSwap, {Card} from '../Component/CardSwap.jsx'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const Home = () => {
    const navigate = useNavigate();

    const loginData = JSON.parse(localStorage.getItem("LoginData")) || null;
    useEffect(() => {
        let timeActivity = null;
        if (!loginData) {
            timeActivity = setTimeout(()=>{
                navigate("/login");
                toast.warn("You are not logged in Please Login.");
            },5000)
        }
        return () => {
            clearTimeout(timeActivity)
        }
    },[])

    const handleClick = () => {
        if (loginData) {
            navigate("/OrderBoard");
        }else{
            navigate("/login");
        }
    }



    return (<main className="bg-black h-screen w-full overflow-hidden absolute top-0 left-0">
        <div className="relative top-30 flex items-center">
            <div className="h-[50vh] w-[50vw] absolute z-10 left-15 top-33 flex flex-col gap-3">
                <h1 className="text-white z-10 text-6xl">Welcome! Good food is just a click away—start your order
                    now!</h1>
                <p className="text-white text-[2.2vh]">Discover a wide range of delicious meals from your favorite
                    restaurants, prepared fresh and delivered right to your doorstep. Whether you’re craving
                    something spicy, sweet, or comforting, your next meal is ready when you are. Enjoy a fast, easy,
                    and satisfying ordering experience!</p>
                <button onClick={handleClick} className="mt-3 flex items-center gap-2 border-2 border-white h-[8vh] w-[20vw] text-2xl px-7 py-3 rounded-2xl bg-black text-white font-semibold shadow-md hover:bg-[#4A70A9] hover:gap-5 hover:border-[#4A70A9] active:scale-95 transition-all duration-300">
                    Get Started
                    <span className="text-2xl">→</span>
                </button>


            </div>
            <div style={{height: '535px'}}>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                >
                    <Card>
                        <div className="flex items-center gap-2 ml-2">
                            <div className="rounded-[100vh] bg-white h-[2vh] w-[1vw]"></div>
                            <h1 className="text-white text-2xl">Order With Ease.</h1>
                        </div>
                        <hr className="text-white"/>
                        <div className='h-[55vh] m-1 w-full rounded-bl-2xl overflow-hidden'>
                            <img className="h-full w-full object-cover" src="https://img.freepik.com/free-vector/menu-green-background_24908-61045.jpg?semt=ais_hybrid&w=740&q=80" alt="Error in Loading"/>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-center gap-2 ml-2">
                            <div className="rounded-[100vh] bg-white h-[2vh] w-[1vw]"></div>
                            <h1 className="text-white text-2xl">Next-Hour Orders.</h1>
                        </div>
                        <hr className="text-white"/>
                        <div className='h-[55vh] m-1 w-full rounded-bl-2xl overflow-hidden'>
                            <img className="h-full w-full object-cover" src="https://www.shutterstock.com/image-illustration/modern-cartoon-illustration-man-holding-600nw-2659445043.jpg" alt="Error in Loading"/>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-center gap-2 ml-2">
                            <div className="rounded-[100vh] bg-white h-[2vh] w-[1vw]"></div>
                            <h1 className="text-white text-2xl">Reliable Order Platform.</h1>
                        </div>
                        <hr className="text-white"/>
                        <div className='h-[55vh] m-1 w-full rounded-bl-2xl overflow-hidden'>
                            <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPQvKWFshXOpX0SnJLGZyU92ZTjxqQau4Yg&s" alt="Error in Loading"/>
                        </div>
                    </Card>
                </CardSwap>
            </div>
        </div>
    </main>)
}
export default Home
