
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import { useEffect } from 'react'
import Card from './components/Card/Card'
import SideBar from './components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  const [cards, setCard] = useState([]);

  const [cook, setCook] = useState([]);

  const [currentCook, setCurrentCook] = useState([]);

  const [addCalorie, setAddCalories] = useState(0);

  const [addTime, setTime] = useState(0);




  // console.log(addCalorie)



  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => setCard(data))
  }, [])



  const notify = () => toast("Wow so easy!");



  const handleCookBtn = (add) => {
    const newCookBtn = cook.find((item) => item.id == add.id)
    if (!newCookBtn) {
      const newCook = [...cook, add]
      setCook(newCook)
    }
    else {
      alert("No")
      // <ToastContainer />
    }


  }



  const CurrentCookBtn = (Current) => {
    const newCurrentCook = [...currentCook, Current]
    setCurrentCook(newCurrentCook)
  }



  const handlePreparingBtn = (id) => {

    const newPreparing = cook.filter((item) => item.id !== id);
    setCook(newPreparing)

  }



  const handelCalories = (calories) => {
    // console.log(calories + 20)
    const newCalories = calories  + addCalorie ;
    setAddCalories(newCalories)
  }


  const handelTime = (time) => {
    const newTime = time + addTime ;
    setTime(newTime)
  }

  // console.log(cook)

  return (

    <>
      {/* <h1>Cook {cook.length}</h1> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
 






      <div className='lg:flex my-32 gap-4 '>


        <div className='grid  gap-4  lg:grid-cols-2'>
          {
            cards.map((card) => <Card
              key={card.id}
              card={card}
              handleCookBtn={handleCookBtn}
              notify={notify}

            ></Card>)
          }
        </div>




        <SideBar

          cook={cook}
          handlePreparingBtn={handlePreparingBtn}
          CurrentCookBtn={CurrentCookBtn}
          currentCook={currentCook}
          handelCalories={handelCalories}
          handelTime={handelTime}
          addCalorie={addCalorie}
          addTime={addTime}
          
        ></SideBar>




      </div>




    </>
  )
}

export default App
