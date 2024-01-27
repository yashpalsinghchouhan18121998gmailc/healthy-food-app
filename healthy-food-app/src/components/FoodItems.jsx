import styles from "./FoodItems.module.css"

function FoodItems({foodItems}) {

    
  return (
    <>
    {foodItems.map((items)=>(
 <div key={items} className={styles.fooditemsdiv}>
 {items}
  </div>
    ))}  
    </>
  )
}

export default FoodItems

//  {/* <button className={styles.fooditemsbtn}>hello</button>       */}