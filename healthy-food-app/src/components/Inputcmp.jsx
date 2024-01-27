import styles from "./Inputcmp.module.css"

function Inputcmp({keyDownfn}) {
     
  return (
    <>
     <div>
      <input onKeyDown={keyDownfn} className={styles.outerdiv} type="text" placeholder="Enter food here....."/>
     </div>
    </>
  )
}

export default Inputcmp
