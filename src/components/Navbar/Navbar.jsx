import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  return (

    <div className="container mx-auto lg:container lg:mx-auto">

      <div className="navbar mt-12 mx-auto">
        <div className="navbar-start">
          <a className="text-[#150B2B] font-extrabold text-2xl lg:text-4xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[18px]">
            <li><a className="text-[#030712]">Home</a></li>
            <li><a className="text-[#030712]">Recipes</a></li>
            <li><a className="text-[#030712]">About</a></li>
            <li><a className="text-[#030712]">Search</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control mr-4">
            <label className="input hidden input-bordered bg-slate-300  rounded-2xl lg:flex items-center gap-2">
            <IoSearchOutline />
              <input type="text" className="grow" placeholder="Search" />
            </label>
 
          </div>
          <div className="  bg-[#0BE58A] hover:bg-[#fff] p-2  rounded-full">
            <img className="rounded-xl " alt="Tailwind CSS Navbar component" src="https://i.ibb.co/NyG1Ltw/Frame-1.png" />
          </div>
        </div>
      </div>


    </div>

  )
}
