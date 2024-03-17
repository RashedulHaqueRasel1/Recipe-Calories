import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";


export default function SideBar({ cook, handlePreparingBtn, CurrentCookBtn, currentCook, handelCalories, addCalorie, handelTime, addTime }) {

  // console.log(cook)

  const { id, recipe_name, preparing_time, calories } = cook;





  return (
    <div className="lg:w-2/5   bg-slate-300 border-2 border-sky-500 rounded-2xl ">

      <h1 className="text-3xl font-bold mt-8">Want to cook: {cook.length}</h1>

      <div className=" mt-6  ">
        <table className="table  bg-slate-400">

          <thead>
            <tr className="text-[18px]">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          <tbody className=" ">

            {

 
                  cook.map((cook, index) => {
                    return (


                      <tr  className=" text-[16px]  " key={cook.id}>
                        <th >{index + 1}</th>
                        <td >{cook.recipe_name}</td>
                        <td >{cook.preparing_time}  minutes</td>
                        <td >{cook.calories} calories</td>
                        <button onClick={() => { handlePreparingBtn(cook.id); CurrentCookBtn(cook); handelCalories(cook.calories); handelTime(cook.preparing_time) }} className="btn  mt-2 bg-[#0BE58A] px-[18px] text-[#150B2B] rounded-3xl  font-semibold    hover:bg-transparent hover:border-[#FF4240] text-[16px]  ">Preparing</button>
                      </tr>



                    )
                  })
 
            }



          </tbody>
        </table>
      </div>
      <div className="divider mt-10"></div>

      <CurrentlyCooking
        currentCook={currentCook}
        addCalorie={addCalorie}
        addTime={addTime}

      ></CurrentlyCooking>






    </div>
  )
}
