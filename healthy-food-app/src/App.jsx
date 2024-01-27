import styles from "./App.module.css"
import Inputcmp from "./components/Inputcmp"
import FoodItems from "./components/FoodItems"
import { useState } from "react"


function App() {

let [foodItems , setFoodItems] = useState(["salad","fruits",'maggi'])
// let textToShow = "show this here ...."

// let [ Text , setText] = useState("text to show ");

  const keyDownfn = (e)=>{
    if(e.key  === 'Enter')
    {
      let newFoodtem = e.target.value;  
      e.target.value = "";
      let newItems = [...foodItems,newFoodtem]
      setFoodItems(newItems)
      // console.log(e.target.value)

      
    }
  }
            

  return (
    <>
     <div className={styles.outerdiv}>
      <h1>Healthy Food</h1>
      <Inputcmp keyDownfn={keyDownfn}></Inputcmp>
      {/* <p>{Text}</p> */}
      <FoodItems foodItems={foodItems}></FoodItems>
     </div>
    </>
  )
}

export default App
