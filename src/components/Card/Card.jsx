import { IoMdTime } from "react-icons/io";
import { AiTwotoneFire } from "react-icons/ai";

export default function Card({ card, handleCookBtn, notify}) {
    // console.log(notify)
    const { recipe_image, recipe_name, short_description, ingredients , preparing_time , calories } = card;
    return (
        <div className="w-3/5">



            <div className="card w-[370px]  bg-slate-300  rounded-2xl shadow-xl">
                <figure>
                    <img src={recipe_image} className="rounded-xl h-[200px]" alt="Food" />
                </figure>
                <div className="text-left">
                    <h2 className="text-left mt-6 text-[#282828] text-xl">{recipe_name}</h2>
                    <p className=" mt-5 text-left opacity-60">{short_description}</p>
                    <h2 className="mt-5 text-left text-[#282828] text-xl font-semibold">ingredients : 4</h2>

                    <div className="ml-4 mt-4 text-[#878787] text-[18px]">

                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                    </div>

                    <div className="flex   mt-7">
                        <div className="flex items-center">
                        <IoMdTime /> <p className="ml-2">{preparing_time} minutes</p> 
                        </div>

                        <div className="flex items-center ml-4">
                         <AiTwotoneFire /> <p className="m-2">{calories} calories</p> 
                        </div>
                    </div>

                    <div className="card-actions mt-6">
                        <button onClick={() => handleCookBtn(card)  } className="btn bg-[#0BE58A] px-[20px] text-[#150B2B] rounded-3xl  font-semibold  mr-6 hover:bg-transparent hover:border-[#FF4240]  ">Want to Cook</button>
                    </div>
                </div>
            </div>








 




        </div>
    )
}
