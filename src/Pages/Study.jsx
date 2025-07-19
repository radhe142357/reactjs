// import { useState } from "react"

import { useEffect, useState } from "react"


// // const abc = () => {
// //     console.log("hello")
// // }


// const Study = () => {
//     const [count, setCount] = useState(0);

//     console.log(count)

//     // const abc = () =>{
//     //     setCount(1)
//     // }











//     //     const sdfsdf = [{id }]
//     // json bna dai 
//     // tabs
//     // toggle 


//     // taks 1. 
//     // Ek state bnai or mero name print ??? 
//     // ex : 1 const data = [ {
//     //     id : 1 , name : "manish"
//     // }]


//     return (
//         <>   
//         {/* <button onClick={() =>abc()}>click me</button> */}

//                {/* <h1 onClick={() => setCount(10)}>on Click handler</h1> */}
//             <h1 onClick={() => setCount(10)}>on Click handler</h1>

//         </>
//     )
// }




// export default Study




const Study = () =>{

    const [count, setCount] = useState(0)
    // const [clicked, setClicked] = useState(false)

    // useEffect(()=>{
    //     setCount(count+1)
    //     setClicked(false)
    // },[])

    return(
        <>
       Count is :  {count}
       <button className="cursor-pointer text-darkpink" onClick={()=>{setCount(count+1)}}>CLick</button>
        </>
    )
}

export default Study