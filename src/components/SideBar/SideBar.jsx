import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";


export default function SideBar({ cook,handlePreparingBtn,CurrentCookBtn,currentCook,handelCalories,calorie, notify}) {

  // console.log(cook)

  const {id, recipe_name, preparing_time, calories } = cook;


 


  return (
    <div className="lg:w-2/5   bg-slate-300  rounded-2xl ">

      <h1 className="text-xl font-bold mt-8">Want to cook: {cook.length}</h1>

      <div className="overflow-x-auto mt-6 bg-white rounded-3xl ">
        <table className="table">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
  
          <tbody>

            {

              cook.map((cook,index) => {
                return (


                  <tr key={cook.id}>

                    <th>{index + 1}</th>
                    <td>{cook.recipe_name}</td>
                    <td>{cook.preparing_time}  minutes</td>
                    <td>{cook.calories} calories</td>
                    <button onClick={() => {handlePreparingBtn(cook.id) ;  CurrentCookBtn(cook) ; handelCalories(cook)} }   className="btn bg-[#0BE58A] px-[20px] text-[#150B2B] rounded-3xl  font-semibold  mr-6 hover:bg-transparent hover:border-[#FF4240]   ">Preparing</button>
                  </tr>



                )
              })
            }



          </tbody>
        </table>
      </div>

      <CurrentlyCooking
      currentCook={currentCook}
      calorie={calorie}
      
      ></CurrentlyCooking>

 




    </div>
  )
}
