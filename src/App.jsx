
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import { useEffect } from 'react'
import Card from './components/Card/Card'
import SideBar from './components/SideBar/SideBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { toast } from 'react-toastify';
import Footer from './components/Footer/Footer'

 



function App() {

  // Card 
  const [cards, setCard] = useState([]);

  // SideBar 
  const [cook, setCook] = useState([]);

  // Current Cooking
  const [currentCook, setCurrentCook] = useState([]);

  // Total Calories
  const [addCalorie, setAddCalories] = useState(0);

  // Total Time
  const [addTime, setTime] = useState(0);




  // console.log(addCalorie)



  // Load Data
  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => setCard(data))
  }, [])



 



  // Want To cook Btn Handler
  const handleCookBtn = (add) => {
    const newCookBtn = cook.find((item) => item.id == add.id)
    if (!newCookBtn) {
      const newCook = [...cook, add]
      setCook(newCook)
    }
    else {
      toast("Already Exist!");
    }
  }




  // Preparing Button Handle 
  const handlePreparingBtn = (id) => {
    const newPreparing = cook.filter((item) => item.id !== id);
    setCook(newPreparing)

  }


  // Preparing Button Pass Argument Current Cooking Handle 
  const CurrentCookBtn = (Current) => {
    const newCurrentCook = [...currentCook, Current]
    setCurrentCook(newCurrentCook)
  }



  // Total Calories Handle
  const handelCalories = (calories) => {
    // console.log(calories + 20)
    const newCalories = calories  + addCalorie ;
    setAddCalories(newCalories)
  }



  // Total Time Handle
  const handelTime = (time) => {
    const newTime = time + addTime ;
    setTime(newTime)
  }

  // console.log(cook)


  return (

    <>
      {/* Navbar Page Added */}
      <Navbar></Navbar>

      {/* Banner Page Added */}
      <Banner></Banner>

      {/* Title Page Added */}
      <Title></Title>
 


      


      {/* Total Card & SideBar Page Added */}
      <div className='lg:flex mt-24 gap-4 '>


          {/* Card Page Added */}
        <div className='grid  gap-4  lg:grid-cols-2'>
          {
            cards.map((card) => <Card
              key={card.id}
              card={card}
              handleCookBtn={handleCookBtn}
 

            ></Card>)
          }
        </div>




          {/* SideBar Page Added */}
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



      {/* Footer Page Added */}
      <Footer></Footer>


      <ToastContainer />


    </>
  )
}

export default App
