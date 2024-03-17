
export default function CurrentlyCooking({ currentCook, addCalorie, addTime }) {
    // console.log(addCalorie)
    const { recipe_name, preparing_time, calories } = currentCook;
    return (
        <div>

            <h1 className="text-xl font-bold mt-12">Currently cooking: {currentCook.length}</h1>

            <div className="overflow-x-auto mt-6 bg-white rounded-3xl">
                <table className="table bg-slate-400">

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

                                currentCook.map((cook, index) => {
                                    return (


                                        <tr key={cook.id}>

                                            <th>{index + 1}</th>
                                            <td>{cook.recipe_name}</td>
                                            <td>{cook.preparing_time} minutes</td>
                                            <td>{cook.calories} calories</td>

                                        </tr>



                                    )
                                })
                            }
 



                    </tbody>
                </table>

            </div>

            <div className="mt-6">
                <h1>Total Time : {addTime} minutes</h1>
                <h1>Total calories : {addCalorie} calories</h1>
            </div>


        </div>
    )
}
