// import React from 'react'
// import './App.css';

// const App = () => {
//   return (
//     <div>
//       <Peader/>
//       <Aqe/>
    

//     </div>
//   )
// }

// const Peader=()=>{
//   return(  <h1 className='Peader'>Front end technologies</h1>
//   )
// }

// const Aqe = () =>{
//   return(
//     <>
//     <img src='https://www.mytoworld.com/wp-content/uploads/2020/10/html-nedir-501x381.png'></img>
//     <img src='https://www.mytoworld.com/wp-content/uploads/2020/10/html-nedir-501x381.png'></img>

//     <img src='https://www.mytoworld.com/wp-content/uploads/2020/10/html-nedir-501x381.png'></img>

//     <img src='https://www.mytoworld.com/wp-content/uploads/2020/10/html-nedir-501x381.png'></img>

//     </>
//   )
//   }
 

// export default App
// import React from 'react'
// import './App.css'

// const App = () => {
//   return (
//     <div className='container'>
//       <BaslikC/>
//       <InputS/>
//       <ButtonS/>
//     </div>
//   )
// }
// const BaslikC=()=>{
//   return(
//     <>
//     <h1 className="header">SUBSCRİBE</h1>

//     <p>lorem aslkdjas lkasjdlkasjd kljasdjalskdj lkasjdlaksjd lkkasjdlkja</p>

//     </>
//   )
// }

// const InputS=()=>{
//   return(
//     <>
//     <div style={{marginTop:"30px",textAlign:"center"}}>
//     <input type='text' placeholder='ad'  className='Input'/>
//     <input type='text' placeholder='soyad'  className='Input'/>
//     <input type='email' placeholder='email'  className='Input'/>
//     </div>
//     </>
//   )
// }

// const ButtonS=()=>{
//   return(
//     <button>SUBSCRİBE</button>
//   )
// }
// export default App

// import React, { useState } from 'react'

// const App = () => {
// const [name,setName]=useState('Ali')

//   return (
//     <div>
//         <button onClick={()=>setName('Osman ')}>Değiştir</button>{name}
//         </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
// const [count,setCount]=useState(0)


//   return (
//     <div>
//         <button onClick={()=>setCount(count+1)}>increase</button>
//         <button onClick={()=>setCount(count-1)}>decrease</button>
//         <hr></hr>

//         {count}</div>
//   )
// }

// export default App



 //import { useState } from "react";

//  function App() {
//   const [friends, setFriends] = useState(["Ali ", "Osman"]);
//    return(
//   <div>
//       <h2>Friends</h2>
//       <br />
//       {
//        friends.map((friend, index) =>
//          <div key={index}>
//            {friend}
//          </div>)
//      }      <button onClick={() => setFriends([...friends, "Tezcan"])}>Add new frend</button> 
//      </div>
//    );
//  }

//  import {useState} from "react";
// import React from 'react'
 
//  const App = () => {
//     const [form, setForm]= useState({name:"", surName:""});

//  const onChanInput=(e)=>{
//     setForm({...form,[e.target.name]:e.target.value})
// }

//   return <div>
//         <h4>Name</h4>
//         <input name="name" value={form.name} onChange={onChanInput}/>
//         <h4>surName</h4>
//          <input name="surName" value={form.surName} onChange={onChanInput}/>

//          {form.name} {form.surName}
//     </div>
  
// }
// export default App

import { useState, useEffect } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Ali");

  useEffect( () => {
    console.log(" number veya name state guncellendi")
  },[number, name]);

  useEffect( () => {
    setNumber(number+1)
  }, 1000)
  // bagimlilik arrayi [] : ici bos olursa component mount edildigi anda yakalayabiliriz demek oluyor. 

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click Number</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("Osman")}>Click Name</button>
    </div>
  );
}
export default App